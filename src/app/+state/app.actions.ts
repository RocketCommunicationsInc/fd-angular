import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProcessedTrackFile, Scenario, TrackFile } from '../types/data.types';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'Initialize Ids': emptyProps(),
  },
});

export const SpacecraftActions = createActionGroup({
  source: 'Spacecraft',
  events: {
    'Spacecraft Id Selected': props<{ spacecraftId: string }>(),
  },
});

export const ScenariosActions = createActionGroup({
  source: 'Scenarios',
  events: {
    'Scenarios Requested': emptyProps(),
    'Scenarios Retrieved': props<{ scenarios: Scenario[] }>(),
    'Scenario Selected': props<{ scenarioId: string }>(),
  },
});

export const TrackFilesActions = createActionGroup({
  source: 'Track Files',
  events: {
    'Track Files Requested': emptyProps(),
    'Track Files Retrieved': props<{ trackFiles: TrackFile[] }>(),
    'Track File Selected': props<{ trackFileId: string }>(),
    'Track File Processed': props<{
      processedTrackFile: ProcessedTrackFile;
      trackFileId: string;
    }>(),
    'Add Track File': props<{ trackFile: TrackFile }>(),
    'Remove Track File': props<{ trackFileId: string }>(),
  },
});
