import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TripsService } from './trips.service';
import { Flights, Options } from './models';

@Injectable({
  providedIn: 'root'
})
export class TripsFacade {
  private tripsSource = new BehaviorSubject<Flights[]>([]);
  private airlinesSource = new BehaviorSubject<Options[]>([]);

  readonly trips$ = this.tripsSource.asObservable();
  readonly airlines$ = this.airlinesSource.asObservable();

  constructor(private tripsService: TripsService) {}

  getTrips(id: string): void {
    this.tripsService.getFlights(id)
      .pipe(
        tap((resp) => {
          this.getAirlines(resp);

          return resp;
        })
      )
      .subscribe((resp) => this.tripsSource.next(resp));
  }

  sortTrips(id: string, airlines: string[]): void {
    // assuming we have BE filtering due to pagination for example
    this.tripsService.getFlights(id, airlines).subscribe((resp) => this.tripsSource.next(resp));
  }

  getAirlines(resp): void {
    const airlines = new Set([]);
    resp.forEach((flight) => {
      flight.flight.flightSegments.forEach((segment) => airlines.add(segment.airlineName));
    });

    this.airlinesSource.next(Array.from(airlines).map((airline) => {
      return {value: airline, selected: true};
    }));
  }
}
