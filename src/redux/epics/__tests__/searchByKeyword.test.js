import 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';

import { search, searchSuccess } from '../../modules/searchByKeyword';
import { getSearchResultEpic } from'../searchByKeyword';


describe('searchRepo$', () => {
  let scheduler;

  beforeEach(() => {
    jest.resetModules();

    scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
  });

  afterEach(() => {
    scheduler.flush();
  });

  it('should match expected result', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable, expectSubscriptions } = helpers;

      const state$ = {
        isFetching: false,
      };
      const dependencies = {
        getJSON: () => of({
          items: [
            {
              id: 1,
              full_name: 'rxjs',
            },
            {
              id: 2,
              full_name: 'rxjs-observe',
            },
          ],
          total_count: 2,
        }),
      };
      const values = {
        a: search('rx'),
        b: searchSuccess({
          keyword: 'rx',
          items: [
            {
              id: 1,
              full_name: 'rxjs',
            },
            {
              id: 2,
              full_name: 'rxjs-observe',
            },
          ],
        }),
      };
      const input$ = '--a';
      const expect = '-- 300ms b';
      const test$ = getSearchResultEpic(
        new ActionsObservable(cold(input$, values)),
        state$,
        dependencies
      );

      expectObservable(test$).toBe(expect, values);
    });
  });
});
