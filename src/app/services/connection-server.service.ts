import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../data/pelicula';
import { Category } from '../data/category';
import { Observable, of } from 'rxjs';
import { User } from '../data/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ConnectionServerService {
  
  constructor(private httpClient: HttpClient, private router: Router) {
    this.getFilms();
  }

  category: Category[] = [];
  selectedFilm: Film = new Film();
  film: Film = new Film();
  filmsArray: Film[] = [];
  user: User = new User();
  

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
    return this.httpClient.post(`${this.url}loginControllerUser.php`, JSON.stringify({ "name_user": name_user, "password": password }))
    .subscribe((datos:any) => {
      if(datos["resultado"] == "NO"){
        alert(datos["menssage"]);
      }else{
        let id = datos["id_user"];
        let name_user = datos["name_user"];
        let password = datos["password"];
        let email = datos["email"];
        let fileName = datos["fileName"];

        this.user.id_user = id;
        this.user.name_user = name_user;
        this.user.password = password;
        this.user.email = email;
        this.user.fileName = fileName;
        console.log(this.user);
        this.router.navigate(['/home']);  
      }

      if(this.user != null) {
          localStorage.setItem("user", JSON.stringify(this.user));
         
      }

    });
    
  }

  register(name_user:string, password: string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}insertControllerUser.php`, JSON.stringify({"name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }

  update(id_user:number, name_user:string, password:string, email:string, fileName:string){
    return this.httpClient.post(`${this.url}updateControllerUser.php`, JSON.stringify({"id_user":id_user, "name_user":name_user, "password": password, "email":email, "fileName":fileName}));
  }

  updateFilm(id_film:number,title:string, author:string, description:string, rating:number, img:string, premiere:string, video:string){
    return this.httpClient.post(`${this.url}updateControllerFilm.php`, JSON.stringify({"id_film":id_film, "title":title, "author": author, "description":description, "rating":rating, "img":img, "premiere":premiere, "video":video}));
  }

  /**
   * Funcion que obtiene la pelicula por la id de la pelicula seleccionada
   * @param id de la pelicula
   * @returns pelicula
   */
   getPelicula(id: number): Observable<Film> {
    
    const pelicula = this.filmsArray.find(h => h.id_film == id);
    if(pelicula == undefined){
      return new Observable<Film>();
    }
    return of(pelicula);
  }



}
