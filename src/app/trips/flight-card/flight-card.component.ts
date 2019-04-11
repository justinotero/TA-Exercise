import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Flights, PriceInfo, Segment } from '../../state-management/models';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnInit {
  @Input() trip: Flights = null; // Add Trip Type

  @Output() viewOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  get firstLeg(): Segment {
    return this.trip.flight.flightSegments[0];
  }

  get lastLeg(): Segment {
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

  get firstLegDepAirportCode(): string {
    return this.firstLeg.departureAirportCode;
  }

  get lastLegArrDate(): Date {
    return this.lastLeg.arrivalDateAndTime;
  }

  get lastLegArrAirportCode(): string {
    return this.lastLeg.arrivalAirportCode;
  }

  get stops(): number {
    return this.trip.flight.flightSegments.length - 1;
  }

  get priceInfo(): PriceInfo {
    return this.trip.priceInfo;
  }

  get duration(): string {
    const hours = Math.floor(this.trip.flight.durationMinutes / 60);
    const minutes = this.trip.flight.durationMinutes % 60;

    return `${hours}h ${minutes}m`;
  }
}
