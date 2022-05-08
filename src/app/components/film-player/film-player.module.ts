import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilmPlayerComponent } from './film-player.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [FilmPlayerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports:[FilmPlayerComponent]
})
export class FilmPlayerModule { }
