import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SigninComponent,
    ContactComponent,
  ],
  imports: [CommonModule, GeneralRoutingModule],
  exports: [HomeComponent, AboutComponent, NotFoundComponent, SigninComponent, ContactComponent],
})
export class GeneralModule {}
