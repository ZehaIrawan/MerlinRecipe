import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar></SearchBar>
        <SearchResult></SearchResult>
      </Fragment>
    </Provider>
  );
}

export default App;
