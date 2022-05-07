import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilmPlayerComponent } from './film-player.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [FilmPlayerComponent, SafePipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule
  ],
  exports:[FilmPlayerComponent]
})
export class FilmPlayerModule { }
