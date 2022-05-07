import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;
  constructor(private router: Router) { }

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

  /**
   * Funcion que cierra sesión del usuario y redirige al login
   */
  closeSession(){
    if(localStorage!=null){
      localStorage.removeItem("user");
    }
    this.router.navigate(['/login']);
  }


}
