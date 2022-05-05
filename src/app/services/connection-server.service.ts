import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';
import { UserJson } from '../data/user-json';
import { Category } from '../data/category';
import { faGrinTongueSquint } from '@fortawesome/free-regular-svg-icons';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {
  @Output() disparadorPerfil: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {
    this.getFilms();
  }

  category: Category[] = [];
  selectedFilm: Film = new Film();
  film: Film = new Film();
  filmsArray: Film[] = [];

  url = "http://localhost/PHP/yelmohome_servidor/controlador/";
  
  getFilms() {
    this.httpClient.get<[]>(`${this.url}mostrarVistaControlador.php`).subscribe(datos => {
     datos.forEach(element => {
        let name_category = element["category"];
        let films: [] = element["films"]; 
        films.forEach(p => {
          if(!this.filmsArray.includes(p)){
            this.filmsArray.push(p);
          }
        });
        let category = new Category();
        category.name_category = name_category;
        category.films = films;
        
        this.category.push(category);
  
      })
    });

  }

  login(name_user: string, password: string) {
    return this.httpClient.post(`${this.url}loginControllerUser.php`, JSON.stringify({ "name_user": name_user, "password": password }));
      
  }

  register(name_user:string, password: string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}insertControllerUser.php`, JSON.stringify({"name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }

  update(id_user:number, name_user:string, password:string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}updateControllerUser.php`, JSON.stringify({"id_user":id_user, "name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }

  /**
   * Funcion que obtiene la pelicula por la id de la pelicula seleccionada
   * @param id de la pelicula
   * @returns pelicula
   */
   getPelicula(id: number): Observable<Film> {
    
    const pelicula = this.filmsArray.find(h => h.id_film == id);
    console.log(pelicula);
    if(pelicula == undefined){
      return new Observable<Film>();
    }
    return of(pelicula);
  }



}
