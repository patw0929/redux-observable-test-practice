import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  filter,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  map,
  catchError,
} from 'rxjs/operators';
import { SEARCH_KEYWORD, searchSuccess, searchFail } from '../modules/searchByKeyword';

export const getSearchResultEpic = action$ => {
  return action$.pipe(
    ofType(SEARCH_KEYWORD),
    debounceTime(300),
    distinctUntilChanged(),
    filter(action => action.keyword.length),
    switchMap(action =>
      ajax.getJSON(`https://api.github.com/search/repositories?q=${action.keyword}&sort=stars&order=desc`)
        .pipe(
          map(response =>
            searchSuccess({
              keyword: action.keyword,
              items: response.items.map(item => {
                return {
                  id: item.id,
                  full_name: item.full_name,
                };
              }),
            })
          // ).takeUntil(
            // action$.ofType(actionTypes.ABORT_GET_POSTS)
          ),
          catchError(error => of(searchFail({
            keyword: action.keyword,
            error,
          })))
        )
    )
  );
};
