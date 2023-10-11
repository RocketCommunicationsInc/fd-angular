import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';
import { TrackFilesComponent } from 'src/app/main/utility-components/track-data-utility/track-files/track-files.component';
import { TrackDataComponent } from 'src/app/main/utility-components/track-data-utility/track-data/track-data.component';
import { Store } from '@ngrx/store';
import { selectCurrentSpacecraft } from 'src/app/+state/app.selectors';
import { Tabs } from 'src/app/types/Tabs';
import { TabbedChildContainerComponent } from 'src/app/shared';
@Component({
  selector: 'fds-track-data-util',
  standalone: true,
  imports: [
    CommonModule,
    AstroComponentsModule,
    TrackFilesComponent,
    TrackDataComponent,
    TabbedChildContainerComponent
  ],
  templateUrl: './track-data-utility.component.html',
  styleUrls: ['./track-data-utility.component.css'],
})
export class TrackDataUtilityComponent {
  constructor(private store: Store){}
  currentSpacecraft$ = this.store.select(selectCurrentSpacecraft)

  renderChart() {
    window.dispatchEvent(new Event('resize')) 
  }

  tabs: Tabs[] = [
    { label: 'Select Files', id: 'files', selected: true },
    { label: 'Filter/Edit Data', id: 'data', selected: false },
  ];
}
