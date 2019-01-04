import { combineEpics } from 'redux-observable';
import { getSearchResultEpic } from '../epics/searchByKeyword';

export const rootEpic = combineEpics(
  getSearchResultEpic
);
