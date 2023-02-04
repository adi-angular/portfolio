import { Action, createReducer, on } from '@ngrx/store';
import { ITestData } from './test-data.model';

import * as TestDataActions from './test-data.actions';

export const TEST_DATA_FEATURE_KEY = 'testData';

export interface State {
  data: ITestData | null;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = {
  data: null,
  loaded: false,
  error: null,
};

const testDataReducer = createReducer(
  initialState,
  on(TestDataActions.loadTestDataSuccess, (state, { testData }) => ({
    ...state,
    data: testData,
    loaded: true,
    error: null,
  })),
  on(TestDataActions.loadTestDataFailure, (state, { error }) => ({
    ...state,
    data: null,
    loaded: false,
    error,
  })),
  on(TestDataActions.clearTestData, (state) => ({
    ...state,
    data: null,
    loaded: false,
    error: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return testDataReducer(state, action);
}
