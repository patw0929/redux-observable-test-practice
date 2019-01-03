import { combineReducers } from 'redux';
import searchByKeyword from './searchByKeyword';

const rootReducer = combineReducers({
  searchByKeyword,
});

export {
  rootReducer,
};
