import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Flight, Flights } from './models';
import { data } from './data';
// import * as _ from 'lodash';

const baseUrl = '/trip-actions/api/';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getFlights(id: string, airlines?: string[]): Observable<Flights[]> { // type
    // const params = {
    //   airlines: airlines.join(',')
    // };
    // return this.http.get<any>(`${baseUrl}${id}`, {params})
    //   .pipe(
    //     map(response => response),
    //     catchError(() => of([]))
    //   );


    // Emulating BE Filtering
    let resp;
    if (airlines) {
      resp = data.filter((flight) => flight.flight.flightSegments.some((segment) => airlines.includes(segment.airlineName)));
    }

    return of(resp || data);
  }
}
