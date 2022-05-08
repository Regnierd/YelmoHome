import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsteriskPipe } from './asterisk.pipe';



@NgModule({
  declarations: [AsteriskPipe],
  imports: [
    CommonModule
  ],
  exports:[AsteriskPipe]
})
export class AsteriskModule { }
