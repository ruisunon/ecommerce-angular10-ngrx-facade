import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredSignDirective } from './required-sign.directive';



@NgModule({
  declarations: [RequiredSignDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
