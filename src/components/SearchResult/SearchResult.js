import React, { Fragment } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SearchResult = ({ items, isFetching, error }) => {
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {!!error && <ErrorMessage text={error} />}
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
    </Fragment>
  );
};

export default SearchResult;
