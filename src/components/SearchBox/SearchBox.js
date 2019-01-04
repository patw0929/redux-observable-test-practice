import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.onChange$ = new Subject();
    this.onChange$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(val => props.onChange(val));
  }

  componentWillUnmount() {
    this.onChange$.unsubscribe();
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="search-input">
          Search GitHub repos:
        </label>

        <input
          type="text"
          id="search-input"
          className="form-control"
          onChange={e => this.onChange$.next(e.target.value)}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBox;
