import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ModalModule } from './modal/modal.module';
import { HomeModule } from './home/home.module';
import { FilmPlayerModule } from './film-player/film-player.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    ModalModule,
    HomeModule,
    FilmPlayerModule,
    
  ],
  
})
export class ComponentsModule { }
