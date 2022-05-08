import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
