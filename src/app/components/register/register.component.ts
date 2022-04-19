import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

  ngOnInit(): void {
  }

  register(name_user:string, password:string, email:string, fileName:string){
    this.connectionServerService.register(name_user, password, email, fileName).subscribe((datos:any) => {
      
      if(datos["resultado"] == "OK"){
        alert(datos["menssage"]);//placeholder
      }
      if(datos["resultado"] == "NO"){
        alert(datos["menssage"]);//placeholder
      }
      
    }) 
         
    this.router.navigate(['/login']);  
   
  }
  

}
