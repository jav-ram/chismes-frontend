import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchGossips, postGossip, deleteGossip } from './index'; 

function* mySaga() {
    yield takeLatest(types.FETCH_GOSSIPS_REQUEST, fetchGossips)
    yield takeLatest(types.GOSSIP_POSTED, postGossip)
    yield takeLatest(types.GOSSIP_REMOVED, deleteGossip)
}

export default mySaga;
