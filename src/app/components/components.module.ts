import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { FilmPlayerModule } from './film-player/film-player.module';
import { ProfileModule } from './profile/profile.module';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { EditFilmModule } from './edit-film/edit-film.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    FilmPlayerModule,
    ProfileModule,
    EditFilmModule
  ]
  
})
export class ComponentsModule { }
