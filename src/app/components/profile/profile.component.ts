import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  
  constructor(private connectionServerService:ConnectionServerService, private router: Router) {}
  
  userLogged: User = JSON.parse(localStorage.getItem("user") || "{}") ;

  ngOnInit(): void {
    //Si el usuario no existe en el localStorage redirige al login
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']);  
    }
  }

  /**
   * Método que llama a la función del servicio update para actualizar
   * los datos del usuario logueado
   * @param name_user del usuario
   * @param password del usuario
   * @param email del usuario
   */
  updateUser(name_user:string, password:string, email:string){
    if(name_user == ""){
      name_user = this.userLogged.name_user;
    }
    if(password == ""){
      password = this.userLogged.password;
    }
    if(email == ""){
      email = this.userLogged.email;
    }

    if(this.userLogged){
      //Enviamos los datos nuevos a la bd y los recibimos actualizados
      this.connectionServerService.updateUser(this.userLogged.id_user, name_user, password, email);
      
    }

    //Una vez actualizados los datos del usuario actualizamos la web para ver los cambios
    this.router.navigate(['/home']).then(() => {window.location.reload()});
  }

  /**
   * Método que llama a la función del servicio deleteUser para eliminar
   * el usuario logueado y llamamos a la función closeSession()
   * @param id_user del usuario
   */
  deleteUser(id_user:number){
    this.connectionServerService.deleteUser(id_user).subscribe((datos:any) => {    
      console.log(datos);
      if(datos["resultado"] == "OK"){
        alert(datos["menssage"]);
        
      }
    }) 
    this.closeSession();
  }

  /**
   * Funcion que elimina la sesión del usuario y redirige al login
   */
   closeSession(){
    if(localStorage!=null){
      localStorage.removeItem("user");
    }
    this.router.navigate(['/login']);
  }


}
