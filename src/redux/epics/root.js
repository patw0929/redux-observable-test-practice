import { combineEpics } from 'redux-observable';
import { getPostsEpic } from '../epics/searchByKeyword';

export const rootEpic = combineEpics(
  getPostsEpic
);
