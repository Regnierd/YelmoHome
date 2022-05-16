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
    if(localStorage.getItem("user") != null){
      this.router.navigate(['/home']);  
    }
  }

  
  register(name_user:string, password:string, email:string){
    let form = document.getElementById("form") as HTMLFormElement;

    if(form.reportValidity()){
      this.connectionServerService.register(name_user, password, email).subscribe((datos:any) => {
      
        if(datos["resultado"] == "OK"){
          alert(datos["menssage"]);
          this.router.navigate(['/login']);
        }
        if(datos["resultado"] == "NO"){
          alert(datos["menssage"]);
        }
        
      }) 
    }
    
         
      
   
  }
  

}
