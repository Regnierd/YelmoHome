import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  user: User = new User();

  constructor(public connectionServerService:ConnectionServerService, private router: Router) {

  }

  ngOnInit(): void {

  }
  

  login(name_user: string, password: string) {
    this.connectionServerService.login(name_user, password).subscribe((datos:any) => {
        console.log(datos);
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

          this.router.navigate(['/home']);  
        }
      
        /*
        crear session localstorage if datos != null else mensaje "no existe el usuario"
        */
      })

  };
  
  
}
