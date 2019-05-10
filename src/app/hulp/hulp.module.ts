import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationCommittedScoreComponent } from './confirmation-committed-score/confirmation-committed-score.component';
import { MaterialModule } from '../material.module';
import { Error404Component } from './error404/error404.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    ConfirmationCommittedScoreComponent,
    Error404Component,
    ChallengeComponent,
    BottomSheetComponent
  ],
  imports: [CommonModule, MaterialModule],
  entryComponents: [BottomSheetComponent],
  exports: [
    ConfirmationCommittedScoreComponent,
    Error404Component,
    ChallengeComponent
  ]
})
export class HulpModule {}
