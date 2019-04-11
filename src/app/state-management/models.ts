export interface Flights {
  uuid: string;
  flight: Flight;
}

export interface Flight {
  flightSegments: Segment[];
  durationMinutes: number;
  connectionCount: number;
  mixedClass: boolean;
  basicEconomy: boolean;
  airFareType: string;
  valid: boolean;
  totalLayoverMinutes: number;
}

export interface Segment {
  uuid: string;
  airlineCode: string;
  airlineName: string;
  operatingAirlineCode: string;
  operatingAirlineName: string;
  operatingFlightNumber: number;
  flightNumber: number;
  stopQuantity: number;
  elapsedTimeMinutes: number;
  departureDateAndTime: Date;
  arrivalDateAndTime: Date;
  estimatedDepartureDateTime: Date;
  estimatedArrivalDateTime: Date;
  departureTerminal: string;
  arrivalTerminal: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  airlineLogoUrl: string;
  flightClass: string;
  airplaneName: string;
  carrierLocator: string;
  departureGate: string;
  departureGateChanged: boolean;
  arrivalGate: string;
  baggageClaim: string;
  status: string;
  fareClass: string;
  segmentNumber: number;
  seatsRemaining: number;
  seatSelectionStatusCode: string;
  highResAirlineLogoUrl: string;
  departureZonedDateTime: Date;
  arrivalZonedDateTime: Date;
  estimatedDepartureZonedDateTime: Date;
  estimatedArrivalZonedDateTime: Date;
  stopsString: string;
}
