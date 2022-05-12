import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFilmComponent } from './edit-film.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [EditFilmComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [EditFilmComponent]
})
export class EditFilmModule { }
