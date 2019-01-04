import React from 'react';
import Spinner from '../Spinner/Spinner';

const SearchResult = ({ items, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item.id}
          className="list-group-item"
        >
          {item.full_name}
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
