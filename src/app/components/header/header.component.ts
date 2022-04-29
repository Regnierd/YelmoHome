import { Component, HostListener, OnInit } from '@angular/core';
import { faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;
  constructor() { }

  ngOnInit(): void {
  }

  navbarfixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 50){
      this.navbarfixed = true;
      
    }else{

      this.navbarfixed = false;
    }
  }


}
