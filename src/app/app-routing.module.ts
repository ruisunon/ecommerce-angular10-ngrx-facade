import { AboutComponent } from './feature-modules/about/about.component';
import { HomeComponent } from './feature-modules/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', loadChildren: () => import(`./feature-modules/admin/admin.module`).then(m => m.AdminModule) },
];
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
