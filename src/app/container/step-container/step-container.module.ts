import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepContainerRoutingModule } from './step-container-routing.module';
import { StepContainerComponent } from './step-container.component';


@NgModule({
  declarations: [StepContainerComponent],
  imports: [
    CommonModule,
    StepContainerRoutingModule
  ]
})
export class StepContainerModule { }
