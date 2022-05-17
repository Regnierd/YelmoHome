import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import { Category } from 'src/app/data/category';
import { Film } from 'src/app/data/pelicula';
import { ConnectionServerService } from 'src/app/services/connection-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  constructor(public connectionServerService:ConnectionServerService, private router: Router) { }

  categories: Category[] = this.connectionServerService.category;
  
  ngOnInit(): void {
    //Si el usuario no existe en el localStorage redirige al login
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/login']);  
    }
  }
  

}
