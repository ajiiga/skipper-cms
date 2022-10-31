import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPipe } from './pipes/auth.pipe';



@NgModule({
  declarations: [
    AuthPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
