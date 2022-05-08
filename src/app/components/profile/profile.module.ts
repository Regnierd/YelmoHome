import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ProfileComponent } from './profile.component';
import { AsteriskModule } from 'src/app/pipe/asterisk.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    AsteriskModule
  ],
  exports:[ProfileComponent]
})
export class ProfileModule { }
