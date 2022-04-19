import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    ModalModule
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
