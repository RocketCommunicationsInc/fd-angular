import { Injectable } from '@angular/core';

// import { ODS_DATA, SUMMARY_DATA } from './output-data-display.data';
import { Unit } from 'src/app/shared/units/units.model';
import { Conversions } from 'src/app/shared/units/unit-conversions';
import { ColumnDefs } from 'src/app/shared/table.service';
import { EphemerisFile } from '../../../../types/data.types';
import { MenuItem } from 'src/app/shared/units/units.model';
import type { Observable, Subscription } from 'rxjs';
import type { TrackFile } from '../../../../types/data.types';
import { selectCurrentTrackFile } from 'src/app/+state/app.selectors';
import { Store } from '@ngrx/store';
export interface SelectOption extends MenuItem {
  selected: boolean;
}

export type DefaultValue = boolean | string | number | SelectOption[];

@Injectable({
  providedIn: 'root',
})
export class ViewOrbitTableService {
  ephemerisData: EphemerisFile[] = [];
  currentTrackFile$ = this.store.select(selectCurrentTrackFile);

  columnDefs: ColumnDefs<EphemerisFile>[] = [
    { header: 'Epoch', field: 'epoch', sortable: true },
    { header: 'Position X', field: 'positionX' },
    { header: 'Position Y', field: 'positionY' },
    { header: 'Position Z', field: 'positionZ' },
    { header: 'Velocity X', field: 'velocityX' },
    { header: 'Velocity Y', field: 'velocityY' },
    { header: 'Velocity Z', field: 'velocityZ' },
  ];

  constructor(private store: Store) {
    this.currentTrackFile$.subscribe((trackFile) => {
      if (!trackFile) return;
      this.ephemerisData.push(trackFile.ephemerisSourceFile);
    });
  }
}
