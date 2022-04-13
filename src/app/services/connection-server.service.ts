import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';
import { FilmsJson } from '../data/films-json';


@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {

  constructor(private httpClient:HttpClient) {
    this.getFilms();
  }

  films:Film[] = [];
  selectedFilm: Film = new Film();
  url = "/home/javier/Documentos/PHP/yelmohome_servidor/controlador/";

  getFilms(){
    this.httpClient.get<FilmsJson>(`${this.url}mostrarVistaControlador.php`).subscribe(datos => {
      datos.data.forEach(element => {
        let id = element.id_film;
        let title = element.title;
        let author = element.author;
        let description = element.description;
        let rating = element.rating;
        let img = element.img;
        let premiere = element.premiere;
        let video = element.video;

        let film: Film = new Film ();
        film.id_film = id;
        film.title = title;
        film.author = author;
        film.description = description;
        film.rating = rating;
        film.img = img;
        film.premiere = premiere;
        film.video = video;

        this.films.push(film);

      })
    });
  }

  login(user:any){
    return this.httpClient.post(`${this.url}loginControllerUser.php`, JSON.stringify(user));
  }
  
}
