import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private connectionServerService:ConnectionServerService, private router: Router) { 

  }

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter= faTwitter;
  faInstagram = faInstagram;

  ngOnInit(): void {
    //Si el usuario existe en el localStorage redirige al home
    if(localStorage.getItem("user") != null){
      this.router.navigate(['/home']);  
    }
  }

  /**
   * Método que llama a la función del servicio register para 
   * registrar al usuario
   * @param name_user del usuario nuevo
   * @param password del usuario nuevo
   * @param email del usuario nuevo
   */
  register(name_user:string, password:string, email:string){
    //Obtenemos el formulario
    let form = document.getElementById("form") as HTMLFormElement;

    //Verificamos si los datos están correctamente escritos como se piden en los patterns
    if(form.reportValidity()){
      //Enviamos los datos del nuevo usuario a la bd y devolvemos un mensaje.
      this.connectionServerService.register(name_user, password, email).subscribe((datos:any) => {
      
        if(datos["resultado"] == "OK"){
          alert(datos["menssage"]);
          //Redirigimos a /login
          this.router.navigate(['/login']);
        }
        if(datos["resultado"] == "NO"){
          alert(datos["menssage"]);
        }
        
      }) 
    }
      
  }  

}
