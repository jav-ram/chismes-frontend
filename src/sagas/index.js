import { call, put } from 'redux-saga/effects';
import * as types from '../types';

import * as actions from '../actions';

import axios from 'axios';

const getGossips = (url) => (
    fetch(url)
        .then( response => response.json())
        .catch( e => console.log(e)))

const saveGossip = (url, gossip) => 
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(gossip), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    })
        .then( response => response.json())
        .catch( e => console.log(e))

const removeGossip = (url, id) => 
    fetch(`${url}${id}/`, {
        method: 'DELETE',
    })
        .catch( e => console.log(e) )


// get Gossips
export function* fetchGossips(action) {
    try {
        const gossips = yield call(getGossips, 'http://localhost:8000/api/v1/chismes/');

        console.log(gossips);

        yield put(actions.fetchGossipsSuccess(gossips));
    }
    catch (e) {

    }
}

// save Gossips
export function* postGossip(action) {
    try {
        const { id } = action.payload;

        const gossips = yield call(saveGossip, 'http://localhost:8000/api/v1/chismes/', action.payload );

        console.log(gossips);

        yield put(actions.updateGossip(id, gossips.id, gossips.title, gossips.content, gossips.date));;
    }
    catch (e) {

    }
}

// delete Gossip
export function* deleteGossip(action) {
    try {

        yield call(removeGossip, 'http://localhost:8000/api/v1/chismes/', action.payload );

        //yield put(actions.fetchGossipsRequest());;
    }
    catch (e) {

    }
}


