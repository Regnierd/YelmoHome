import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/data/category';
import { Film } from 'src/app/data/pelicula';
import { ConnectionServerService } from 'src/app/services/connection-server.service';


@Component({
  selector: 'app-film-player',
  templateUrl: './film-player.component.html',
  styleUrls: ['./film-player.component.scss']
})
export class FilmPlayerComponent implements OnInit {

  constructor(public connectionServerService:ConnectionServerService, private route: ActivatedRoute) { }

  categories: Category[] = this.connectionServerService.category
  selectedFilm: Film = this.connectionServerService.selectedFilm;
  urlFilm: string = this.selectedFilm.video;
  expandirTexto:boolean = false;

  ngOnInit(): void {
    
  }

  //Metodo que detecta cambios en la funcion que se llama.
  ngDoCheck(): void{
    this.getPelicula();
    
  }

  /**
   * Metodo que llama a la funcion getPelicula del servicio
   */
   getPelicula(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.connectionServerService.getPelicula(id)
      .subscribe(film => this.selectedFilm = film);
  }


}
