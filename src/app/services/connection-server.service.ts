import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';
import { UserJson } from '../data/user-json';
import { Category } from '../data/category';
import { faGrinTongueSquint } from '@fortawesome/free-regular-svg-icons';



@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {

  constructor(private httpClient: HttpClient) {
    this.getFilms();
  }

  category: Category[] = [];
  selectedFilm: Film = new Film();

  url = "http://localhost/PHP/yelmohome_servidor/controlador/";
  

  getFilms() {
    this.httpClient.get<[]>(`${this.url}mostrarVistaControlador.php`).subscribe(datos => {
     datos.forEach(element => {
        let name_category = element["category"];
        let films = element["films"];

        let category = new Category();
        category.name_category = name_category;
        category.films = films;
        
        this.category.push(category);


        /*let id = category["id_film"];
        let title = category["title"];
        let author = element["author"];
        let description = element["description"];
        let rating = element["rating"];
        let img = element["img"];
        let premiere = element["premiere"];
        let video = element["video"];
        let category = element["category"];

        let film: Film = new Film();
        film.id_film = id;
        film.title = title;
        film.author = author;
        film.description = description;
        film.rating = rating;
        film.img = img;
        film.premiere = premiere;
        film.video = video;
        film.category = category;
        
        this.films.push(film);*/
      })
    });
    console.log(this.category);
  }

  login(name_user: string, password: string) {
    return this.httpClient.post(`${this.url}loginControllerUser.php`, JSON.stringify({ "name_user": name_user, "password": password }));
      
  }

  register(name_user:string, password: string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}insertControllerUser.php`, JSON.stringify({"name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }




}
