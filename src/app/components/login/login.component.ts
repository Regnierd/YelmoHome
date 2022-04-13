import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ConnectionServerService } from 'src/app/services/connection-server.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter= faTwitter;

  user = {};

  constructor(private connectionServerService:ConnectionServerService) { 
    
  }

  ngOnInit(): void {
  }

  login(name_user:string, password:string){
    this.user = {
      name_user:name_user,
      password:password
    };

    this.connectionServerService.login(this.user);
  }

}
