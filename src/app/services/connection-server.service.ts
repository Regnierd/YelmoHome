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
  
  /**
   * Contructor del servicio que llama a la Función que trae todas las películas del servidor
   * @param httpClient 
   * @param router 
   */
  constructor(private httpClient: HttpClient, private router: Router) {
    this.getFilms();
  }

  category: Category[] = [];
  selectedFilm: Film = new Film();
  film: Film = new Film();
  filmsArray: Film[] = [];
  user: User = new User();
  
  //URL estatica del servidor
  url = "http://localhost/PHP/yelmohome_servidor/controlador/";
  
  /**
   * Función para obtener todas las películas separadas por sus categorias
   */
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

  /**
   * Función que comprueba si el usuario existe, si existe se loguea, si no existe envia un mensaje
   * @param name_user del usuario
   * @param password del usuario
   * @returns 
   */
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

        this.user.id_user = id;
        this.user.name_user = name_user;
        this.user.password = password;
        this.user.email = email;
        this.router.navigate(['/home']);  
      }

      if(this.user != null && this.user.name_user != "") {
          localStorage.setItem("user", JSON.stringify(this.user));  
      }

    });
    
  }

  /**
   * Función que registra un usuario nuevo en la bd 
   * @param name_user del usuario
   * @param password del usuario
   * @param email del usuario
   * @returns mensaje
   */
  register(name_user:string, password: string, email:string){
    return this.httpClient.post(`${this.url}insertControllerUser.php`, JSON.stringify({"name_user":name_user, "password": password, "email":email}));
  }

  /**
   * Función que actualiza el usuario logueado en el servidor y devuelve los datos actualizados
   * @param id_user del usuario actualizado
   * @param name_user del usuario actualizado
   * @param password del usuario actualizado
   * @param email del usuario actualizado
   * @returns user
   */
  updateUser(id_user:number, name_user:string, password:string, email:string){
    return this.httpClient.post(`${this.url}updateControllerUser.php`, JSON.stringify({"id_user":id_user, "name_user":name_user, "password": password, "email":email}));
  }

  /**
   * Función que actualiza una película en el servidor y devuelve la película actualizada
   * @param id_film de la película
   * @param title de la película
   * @param author de la película
   * @param description de la película
   * @param rating de la película
   * @param img de la película
   * @param premiere de la película
   * @param video de la película
   * @returns film
   */
  updateFilm(id_film:number,title:string, author:string, description:string, rating:number, img:string, premiere:string, video:string){
    return this.httpClient.post(`${this.url}updateControllerFilm.php`, JSON.stringify({"id_film":id_film, "title":title, "author": author, "description":description, "rating":rating, "img":img, "premiere":premiere, "video":video}));
  }

  /**
   * Función que elimina un usuario de la bd 
   * @param id_user del usuario
   * @returns mensaje
   */
  deleteUser(id_user:number){
    return this.httpClient.post(`${this.url}deleteControllerUser.php`, JSON.stringify({"id_user": id_user}));
  }

  /**
   * Funcion que elimina una película de la bd
   * @param id_film de la película
   * @returns mensaje
   */
  deleteFilm(id_film:number){
    return this.httpClient.post(`${this.url}deleteControllerFilm.php`, JSON.stringify({"id_film": id_film}));
  }

  /**
   * Función que obtiene la película por la id de la película seleccionada
   * @param id de la película
   * @returns película
   */
   getPelicula(id: number): Observable<Film> {
    
    const película = this.filmsArray.find(h => h.id_film == id);
    if(película == undefined){
      return new Observable<Film>();
    }
    return of(película);
  }



}
