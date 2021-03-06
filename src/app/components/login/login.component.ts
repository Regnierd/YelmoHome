import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { User } from 'src/app/data/user';
import { ConnectionServerService } from 'src/app/services/connection-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  user: User = new User();

  constructor(public connectionServerService:ConnectionServerService, private router: Router) {
    
  }

  ngOnInit(): void {
    //Si el usuario existe en el localStorage redirige al home
    if(localStorage.getItem("user") != null){
      this.router.navigate(['/home']);  
    }
  }
  

  /**
   * Método que llama al a función login del servicio
   * @param name_user del usuario
   * @param password del usuario
   */
  login(name_user: string, password: string) {
    this.connectionServerService.login(name_user, password);
      
  }
  
  
  
}
