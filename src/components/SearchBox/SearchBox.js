import React from 'react';

const SearchBox = ({ value, onChange }) => (
  <div className="form-group">
    <label htmlFor="search-input">
      Search GitHub repos:
    </label>

    <input
      type="text"
      id="search-input"
      className="form-control"
      value={value}
      onChange={e => onChange.call(this, e.target.value)}
      placeholder="Search"
    />
  </div>
);

export default SearchBox;
