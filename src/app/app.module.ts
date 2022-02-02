import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './container/home/home.component';
import { NewCarsComponent } from './container/new-cars/new-cars.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './components/results/results.component';
import { UsedCarsComponent } from './container/used-cars/used-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewCarsComponent,
    CardComponent,
    ResultsComponent,
    UsedCarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
