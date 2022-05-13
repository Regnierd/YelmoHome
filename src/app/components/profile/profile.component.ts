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
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']);  
    }
  }

  update(name_user:string, password:string, email:string){
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
      this.connectionServerService.update(this.userLogged.id_user, name_user, password, email).subscribe((datos:any) => {
        this.userLogged.name_user = datos["name_user"];
        this.userLogged.password = datos["password"];
        this.userLogged.email = datos["email"];
        localStorage.setItem("user", JSON.stringify(this.userLogged));
      })
    }
    
    this.router.navigate(['/home']);
  }

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
