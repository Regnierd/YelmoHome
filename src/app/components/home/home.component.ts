import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data/category';
import { Film } from 'src/app/data/pelicula';
import { ConnectionServerService } from 'src/app/services/connection-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public connectionServerService:ConnectionServerService) { }

  categories: Category[] = this.connectionServerService.category;
  
  ngOnInit(): void {
  }

  

}
