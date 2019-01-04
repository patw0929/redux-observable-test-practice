import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import searchByKeyword from './searchByKeyword';

const rootEpic = combineEpics(

);

const rootReducer = combineReducers({
  searchByKeyword,
});

export {
  rootEpic,
  rootReducer,
};
