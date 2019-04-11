import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnInit {
  @Input() trip = null; // Add Trip Type

  @Output() viewOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  get firstLeg() { // add type
    return this.trip.flight.flightSegments[0];
  }

  get lastLeg() { // add type
    return this.trip.flight.flightSegments[this.trip.flight.flightSegments.length - 1];
  }

  get logoUrl(): string {
    return this.firstLeg.highResAirlineLogoUrl;
  }

  get firstLegDepAirlineName(): string {
    return this.firstLeg.airlineName;
  }

  get firstLegDepDate(): Date {
    return this.firstLeg.departureDateAndTime;
  }

  get firstLegDepAirportCode(): Date {
    return this.firstLeg.departureAirportCode;
  }

  get lastLegArrDate(): Date {
    return this.lastLeg.arrivalDateAndTime;
  }

  get lastLegArrAirportCode(): Date {
    return this.lastLeg.arrivalAirportCode;
  }

  get stops(): number {
    return this.trip.flight.flightSegments.length - 1;
  }

  get price(): number {
    return this.trip.priceInfo.totalPrice;
  }

  get duration(): string {
    const hours = Math.floor(this.trip.flight.durationMinutes / 60);
    const minutes = this.trip.flight.durationMinutes % 60;

    return `${hours}h ${minutes}m`;
  }
}
