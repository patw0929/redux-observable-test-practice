import React from 'react';
import DebounceInput from '../../hoc/DebounceInput';

const SearchBox = ({ onChange, props$ }) => (
  <div className="form-group">
    <label htmlFor="search-input">
      Search GitHub repos:
    </label>

    <input
      type="text"
      id="search-input"
      className="form-control"
      onChange={e => props$.next(e.target.value)}
      placeholder="Search"
    />
  </div>
);

export default DebounceInput(
  SearchBox
);
