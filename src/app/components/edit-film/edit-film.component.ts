import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/data/pelicula';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  
  constructor(public connectionServerService:ConnectionServerService, private route: ActivatedRoute, private router: Router) { }

  
  selectedFilm: Film = this.connectionServerService.selectedFilm;
  id:number = 0;

  ngOnInit(): void {
    //Si el usuario no existe en el localStorage redirige al login
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']).then();  
    }
    
  }
  ngDoCheck(): void{
    this.getPelicula();

  }
  /**
   * Metodo que llama a la funcion getPelicula del servicio.
   * Obtiene la id de la pelicula que seleccionamos y cambia 
   * el valor de la variable selectedFilm.
   */
   getPelicula(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.connectionServerService.getPelicula(this.id)
      .subscribe(film => { 
        this.selectedFilm = film;
      });
  }

  /**
   * Método que llama a la función del servicio para actualizar la película,
   * procesa primero los datos y luego los envía.
   * @param title de la película
   * @param author de la película
   * @param description de la película
   * @param rating de la película
   * @param img de la película
   * @param premiere de la película
   * @param video de la película
   */
  updateFilm(title:string, author:string, description:string, rating:string, img:string, premiere:string, video:string){
    let ratingParsed:any;

    if(rating == "" ){
      ratingParsed = this.selectedFilm.rating;
      parseInt(ratingParsed);
    }else{
      ratingParsed = parseInt(rating);
    }
    
    if(title == ""){
      title = this.selectedFilm.title;
    }
    if(author == ""){
      author = this.selectedFilm.author;
    }
    if(description == ""){
      description = this.selectedFilm.description;
    }
    if(ratingParsed < 0){
      ratingParsed = this.selectedFilm.rating;
    }
    if(img == ""){
      img = this.selectedFilm.img;
    }
    if(premiere == ""){
      premiere = this.selectedFilm.premiere;
    }
    if(video == ""){
      video = this.selectedFilm.video;
    }

    //Enviamos los datos nuevos y a la vez los recibimos
    if(this.selectedFilm){
      this.connectionServerService.updateFilm(this.selectedFilm.id_film, title, author, description, ratingParsed, img, premiere, video).subscribe((datos:any) => {
        this.selectedFilm.title = datos["title"];
        this.selectedFilm.author= datos["author"];
        this.selectedFilm.description = datos["description"];
        this.selectedFilm.rating = datos["rating"];
        this.selectedFilm.img = datos["img"];
        this.selectedFilm.premiere = datos["premiere"];
        this.selectedFilm.video = datos["video"];
     
      })
    }

    //Después de actualizar los datos y recibir los nuevos datos, 
    //redirige a /player-film y actualizamos la web para ver los cambios
    this.router.navigate(['/player-film/'+this.selectedFilm.id_film]).then(() => {window.location.reload()});
  }

  /**
   * Método que llama a la función del servicio para eliminar la película
   * @param id_film de la película
   */
  deleteFilm(id_film:number){
    this.connectionServerService.deleteFilm(id_film).subscribe((datos:any) => {
      if(datos["resultado"] == "OK"){
        alert(datos["menssage"]);
      }
      
    })
    
    //Una vez eliminada de la bd y devuelve el mensaje redirigimos a /home 
    //y actualizamos la web para ver los cambios
    this.router.navigate(['/home']).then(() => {window.location.reload()});
  }



}
