import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
import { Router } from '@angular/router';
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
    this.connectionServerService.register(name_user, password, email).subscribe((datos:any) => {
      
      if(datos["resultado"] == "OK"){
        alert(datos["menssage"]);
      }
      if(datos["resultado"] == "NO"){
        alert(datos["menssage"]);
      }
      
    }) 
         
    this.router.navigate(['/login']);  
   
  }
  

}
