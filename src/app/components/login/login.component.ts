import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter= faTwitter;

  ngOnInit(): void {
  }

}
