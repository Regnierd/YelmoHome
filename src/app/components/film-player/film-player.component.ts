import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/data/pelicula';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-film-player',
  templateUrl: './film-player.component.html',
  styleUrls: ['./film-player.component.scss']
})
export class FilmPlayerComponent implements OnInit {

  constructor(public connectionServerService:ConnectionServerService, private route: ActivatedRoute, private domSanitizer: DomSanitizer, private router: Router) { }

  faPenToSquare = faPenToSquare;
  selectedFilm: Film = this.connectionServerService.selectedFilm;
  urlFilm: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("");
  admin: User = JSON.parse(localStorage.getItem("user") || "{}") ;
  expandirTexto:boolean = false;
  edit:boolean = false;
  
  ngOnInit(): void {
    //Si el usuario no existe en el localStorage redirige al login
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']);  
    }
    
  }

  //Metodo que detecta cambios en la funcion que se llama.
  ngDoCheck(): void{
    this.getPelicula();
  
    if(this.admin.name_user == "admin" || this.admin.name_user == "Admin"){
      this.edit = true;
    }
    
  }

  /**
   * Metodo que llama a la funcion getPelicula del servicio.
   * Obtiene la id de la pelicula que seleccionamos y cambia 
   * el valor de la variable selectedFilm.
   * Además obtiene la url del video y prevenimos los errores de seguridad
   * de Cross Site Scripting para que sea seguro de usar en el DOM
   */
   getPelicula(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.connectionServerService.getPelicula(id)
      .subscribe(film => { 
        this.selectedFilm = film;
        this.urlFilm = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedFilm.video);
      });
      
  }


}
