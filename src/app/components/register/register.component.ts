import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter= faTwitter;

  ngOnInit(): void {
  }

}
