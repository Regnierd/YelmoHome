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
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']);  
    }
    
  }
  ngDoCheck(): void{
    this.getPelicula();

  }
  /**
   * Metodo que llama a la funcion getPelicula del servicio
   */
   getPelicula(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.connectionServerService.getPelicula(this.id)
      .subscribe(film => { 
        this.selectedFilm = film;
      });
  }


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

    this.router.navigate(['/player-film/'+this.selectedFilm.id_film]);
  }



}
