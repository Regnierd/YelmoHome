import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule

  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
