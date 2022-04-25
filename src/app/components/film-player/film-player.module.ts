import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilmPlayerComponent } from './film-player.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';


@NgModule({
  declarations: [FilmPlayerComponent, SafePipe],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[FilmPlayerComponent]
})
export class FilmPlayerModule { }
