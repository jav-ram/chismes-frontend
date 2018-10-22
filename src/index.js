import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import configureStore from './configureStore';

import * as routes from './routes';

import HomeApp from './components/home/homeApp';
import PostApp from './components/gossip/gossipApp';

import * as actions from './actions';

import './index.css';

const store = configureStore();

store.dispatch(actions.setCurrentGossip("id"))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route exact path='' component={() => <HomeApp />} />
        <Route exact path={routes.POST} component={() => <PostApp /> } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
