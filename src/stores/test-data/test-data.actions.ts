import { createAction, props } from '@ngrx/store';
import { ITestData } from './test-data.model';

export const loadTestData = createAction(
  '[TestData Page] Load TestData',
  props<{ dataId: string }>()
);

export const loadTestDataSuccess = createAction(
  '[TestData/API] Load TestData Success',
  props<{ testData: ITestData }>()
);

export const loadTestDataFailure = createAction(
  '[TestData/API] Load TestData Failure',
  props<{ error: any }>()
);

export const clearTestData = createAction('[TestData Page] Clear TestData');
