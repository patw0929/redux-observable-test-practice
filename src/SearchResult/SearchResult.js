import React from 'react';

const SearchResult = ({ items }) => (
  <ul className="list-group">
    {items.map(item => (
      <li className="list-group-item">{item.full_name}</li>
    ))}
  </ul>
);

export default SearchResult;
