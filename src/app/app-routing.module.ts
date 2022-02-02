import { UsedCarsComponent } from './container/used-cars/used-cars.component';
import { NewCarsComponent } from './container/new-cars/new-cars.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new-cars', component: NewCarsComponent },
  { path: 'used-cars', component: UsedCarsComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
