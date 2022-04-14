import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';
import { UserJson } from '../data/user-json';



@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {

  constructor(private httpClient: HttpClient) {
    this.getFilms();
  }

  films: Film[] = [];
  selectedFilm: Film = new Film();
  url = "http://localhost/PHP/yelmohome_servidor/controlador/";
  

  getFilms() {
    this.httpClient.get<[]>(`${this.url}mostrarVistaControlador.php`).subscribe(datos => {
     datos.forEach(element => {
        let id = element["id_film"];
        let title = element["title"];
        let author = element["author"];
        let description = element["description"];
        let rating = element["rating"];
        let img = element["img"];
        let premiere = element["premiere"];
        let video = element["video"];

        let film: Film = new Film();
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

  login(name_user: string, password: string) {
    return this.httpClient.post(`${this.url}loginControllerUser.php`, JSON.stringify({ "name_user": name_user, "password": password }));
      
  }

  register(name_user:string, password: string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}insertControllerUser.php`, JSON.stringify({"name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }




}
