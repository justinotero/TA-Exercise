import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-airline-filter',
  templateUrl: './airline-filter.component.html',
  styleUrls: ['./airline-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirlineFilterComponent {
  open = true;

  @Input() airlines = [];

  @Output() selectedAirlines = new EventEmitter<string[]>();

  constructor() { }

  toggle(): void {
    this.open = !this.open;
  }
  onChange(): void {
    const selected = this.airlines.filter((airline) => airline.selected).map((airline) => airline.value);

    this.selectedAirlines.emit(selected);
  }
}
