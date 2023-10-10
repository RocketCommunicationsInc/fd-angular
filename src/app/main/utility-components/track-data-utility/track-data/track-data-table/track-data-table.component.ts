import { Component, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';
import { SitesComponent } from '../sites/sites.component';
import { SettingsComponent } from '../settings/settings.component';
import { TrackFile } from 'src/app/types/data.types';
import { TrackFilesDataUtilityService } from '../../track-files-data.service';
import { TableService } from 'src/app/shared/table.service';


@Component({
  selector: 'fds-track-data-table',
  standalone: true,
  imports: [
    CommonModule,
    AstroComponentsModule,
    SitesComponent,
    SettingsComponent,
  ],
  providers: [TableService],
  templateUrl: './track-data-table.component.html',
  styleUrls: ['./track-data-table.component.css'],
})
export class TrackDataTableComponent {

  sharedTableData$ = this.trackFilesService.get()
  sharedTableData: any[] = []

  //table variables
  columnDefs = [
    { header: 'File Name', field: 'name', sortable: true },
    { header: 'Date', field: 'creationDate', sortable: true },
    { header: 'File Size', field: 'fileSize', sortable: true },
  ];

  //subscription cleanup
  destroyRef = inject(DestroyRef)
  destroyed = new Subject();

  constructor(public trackFilesService: TrackFilesDataUtilityService, public tableService: TableService<any>){
  }

  ngOnInit(){
    this.sharedTableData$.subscribe(res => {
      console.log(res)
      this.sharedTableData = res})
    this.getFiles()
  }
  getFiles(){
    this.tableService.init({data: this.sharedTableData, columnDefs: this.columnDefs});
  }

  ngOnDestroy(){
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}