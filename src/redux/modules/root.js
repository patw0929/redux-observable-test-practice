import { combineReducers } from 'redux';
import searchByKeyword from './searchByKeyword';

export const rootReducer = combineReducers({
  searchByKeyword,
});
