import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { FlightCardComponent } from './trips/flight-card/flight-card.component';
import { AirlineFilterComponent } from './trips/airline-filter/airline-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    FlightCardComponent,
    AirlineFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
