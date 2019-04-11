import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TripsFacade } from '../state-management/trips-facade';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsComponent implements OnInit {
  trips$ = this.facade.trips$;
  airlines$ = this.facade.airlines$;

  constructor(private facade: TripsFacade) { }

  ngOnInit() {
    // Assuming I have a personId or companyId
    const companyId = '342JKJA381J';
    this.facade.getTrips(companyId);
  }

  viewOption(optionId: string): void {
    console.log(`Option ${optionId} - Should be loaded, and navigate user to this detail view.`);
  }

  filterOptions(selected: string[]): void {
    this.facade.sortTrips('companyId', selected);
  }

}
