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
      const { cold, expectObservable } = helpers;

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

  it('should match expected result', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;

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
        b: search('rxj'),
        c: search(''),
        r: searchSuccess({
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
      // 0 1 a -> 100ms -> 102ms -> 103ms (b) -> 203ms -> 204ms (a) -> 504ms -> 505ms (c)
      const input$ = '--a 100ms b 100ms a 400ms --c';
      const expect = '504ms r';
      const test$ = getSearchResultEpic(
        new ActionsObservable(cold(input$, values)),
        state$,
        dependencies
      );

      expectObservable(test$).toBe(expect, values);
    });
  });

  it('should match expected result', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable } = helpers;

      const state$ = {
        isFetching: false,
      };
      const dependencies = {
        getJSON: () => of({
          items: [],
          total_count: 0,
        }),
      };
      const values = {};
      const input$ = '-----';
      const expect = '-----';
      const test$ = getSearchResultEpic(
        new ActionsObservable(cold(input$, values)),
        state$,
        dependencies
      );

      expectObservable(test$).toBe(expect, values);
    });
  });
});
