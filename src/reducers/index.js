
import { combineReducers } from 'redux';
import gossips, * as fromGossip from './gossips';
import { reducer as formReducer } from 'redux-form';

import * as types from '../types';

const current = (state= '', action) => {

    switch (action.type) {
        case types.SET_CURRENT_GOSSIP: {
            return action.payload
        }

        default: {
            return state;
        }
    }
}

const reducer = combineReducers({ 
    current,
    gossips,
    form: formReducer,
 });

export default reducer;

export const getGossip = (state, id) => fromGossip.getGossip(state.gossips, id);
export const getGossips = (state) => fromGossip.getGossips(state.gossips);