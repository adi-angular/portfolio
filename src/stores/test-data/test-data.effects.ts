import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

import * as TestDataActions from './test-data.actions';

@Injectable()
export class TestDataEffects {
  loadTestData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TestDataActions.loadTestData),
      fetch({
        run: (action) => {
          return of({ someData: 'Some Data' }).pipe(
            map((response: any) => {
              return response
                ? TestDataActions.loadTestDataSuccess({ testData: response })
                : TestDataActions.loadTestDataFailure({
                    error: 'Something went wrong!',
                  });
            })
          );
        },
        onError: (action, error) => {
          console.error('Load TestData Failure Error', error);
          return TestDataActions.loadTestDataFailure({
            error: 'Something went wrong!',
          });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
