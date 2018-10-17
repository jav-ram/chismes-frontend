
import { combineReducers } from 'redux';
import gossips, * as fromGossip from './gossips';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({ 
    gossips,
    form: formReducer,
 });

export default reducer;

export const getGossip = (state, id) => fromGossip.getGossip(state.gossips, id);
export const getGossips = (state) => fromGossip.getGossips(state.gossips);