import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';

import * as actions from './actions'; 

import HomeApp from './components/home/homeApp';

const store = configureStore();

console.log(store.getState());
store.dispatch(actions.postGossip("Primer post", "Es el primer post. Usado para pruebas. Por favor comentar para dejar sugerencia."));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <HomeApp />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
