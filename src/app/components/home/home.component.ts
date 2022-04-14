import { Component, OnInit } from '@angular/core';
import { ConnectionServerService } from 'src/app/services/connection-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public connectionServerService:ConnectionServerService) { }

  ngOnInit(): void {
  }

}
