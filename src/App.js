import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './App.css';
import SearchBox from './SearchBox/SearchBoxContainer';
import SearchResult from './SearchResult/SearchResultContainer';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <SearchBox />
          <SearchResult />
        </div>
      </Provider>
    );
  }
}

export default App;
