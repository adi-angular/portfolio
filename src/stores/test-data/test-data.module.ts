import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTestData from './test-data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestDataEffects } from './test-data.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTestData.TEST_DATA_FEATURE_KEY,
      fromTestData.reducer
    ),
    EffectsModule.forFeature([TestDataEffects]),
  ],
})
export class TestDataModule {}
