import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import {
  filter,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  map,
  catchError,
} from 'rxjs/operators';
import { SEARCH_KEYWORD, searchSuccess, searchFail } from '../modules/searchByKeyword';

const fetchAPI = (getJSON, action) => (
  getJSON(`https://api.github.com/search/repositories?q=${action.keyword}&sort=stars&order=desc`)
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
      ),
      catchError(error => of(searchFail({
        keyword: action.keyword,
        error,
      })))
    )
);

export const getSearchResultEpic = (action$, store, { getJSON }) => {
  return action$.pipe(
    ofType(SEARCH_KEYWORD),
    debounceTime(300),
    distinctUntilChanged(),
    filter(action => action.keyword.length),
    switchMap(action =>
      fetchAPI(getJSON, action)
    )
  );
};
