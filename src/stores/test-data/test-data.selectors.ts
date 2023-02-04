import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, TEST_DATA_FEATURE_KEY } from './test-data.reducer';

export const getTestDataState = createFeatureSelector<State>(
  TEST_DATA_FEATURE_KEY
);

export const getTestData = createSelector(
  getTestDataState,
  (state: State) => state.data
);

export const getTestDataLoaded = createSelector(
  getTestDataState,
  (state: State) => state.loaded
);

export const getTestDataError = createSelector(
  getTestDataState,
  (state: State) => state.error
);
