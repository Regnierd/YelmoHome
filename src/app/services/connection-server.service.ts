import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';



@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {

  constructor(private httpClient:HttpClient) {
    this.getFilms();
  }

  films:Film[] = [];
  selectedFilm: Film = new Film();

  getFilms(){
    this.httpClient.get<Film>("").subscribe(datos => {

    });
  }
  
}
