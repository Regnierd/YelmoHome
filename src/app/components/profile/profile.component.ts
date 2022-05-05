import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //TRAER DEL COMPONENTE LOGIN EL USUARIO
  //Y TRABAJAR CON EL USUARIO DESDE EL COMPONENTE PROFILE
  constructor(private connectionServerService:ConnectionServerService, private router: Router) {}

  ngOnInit(): void {
    this.connectionServerService.disparadorPerfil.subscribe(data =>{
      console.log("Recibiendo...",data);
    });
  }

  update(id_user:number, name_user:string, password:string, email:string, fileName:string){
    //Controlar que los campos string no sean vacios
    //Si son vacios se les asigna los valores del usuario antiguo
    this.connectionServerService.update(id_user, name_user, password, email, fileName).subscribe((datos:any) => {
      if(datos["resultado"] == "OK"){
        alert(datos["menssage"]);//placeholder
      }
      if(datos["resultado"] == "NO"){
        alert(datos["menssage"]);//placeholder
      }
    })
    this.router.navigate(['/home']);
  }

}
