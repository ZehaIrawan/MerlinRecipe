import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe';
import Search from './components/Search';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/products" component={Recipe} />
            <Route exact path="/" component={Search} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
