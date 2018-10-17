import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {

        case types.GOSSIP_POSTED: {
            const gossip = action.payload;
            return ({
                ...state,
                [gossip.id]: {
                    ...gossip
                }
            })
        }

        case types.GOSSIP_REMOVED: {
            const id = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        case types.GOSSIP_UPDATED: {
            const {old_id, id, title, content} = action.payload;
            const new_gossip = {
                id,
                title,
                content,
            }
            const new_state = state;
            delete new_state[id];
            console.log(new_gossip)
            return {
                ...new_state,
                [new_gossip.id]: {
                    ...new_gossip,
                }
            }
        }

        case types.FETCH_GOSSIPS_REQUEST: {
            return state;
        }

        case types.FETCH_GOSSIPS_SUCCESS: {
            const gossips = action.payload;
            const new_state = {};
            gossips.forEach(gossip => new_state[gossip.id] = gossip);
            console.log(new_state)
            return new_state;
        }

        default: {
            return state;
        }
    }
}

const order = (state = [], action) => {
    switch (action.type) {

        case types.GOSSIP_POSTED: {
            const { id } = action.payload;
            return([
                ...state,
                id,
            ])
        }

        case types.GOSSIP_REMOVED: {
            const id = action.payload;
            const index = state.indexOf(id)
            const new_state = [
                ...state.slice(0, index),
                ...state.slice(index+1, state.length)
            ];
            console.log(new_state)
            return new_state;
        }

        case types.GOSSIP_UPDATED: {
            const {old_id, id} = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }

        case types.FETCH_GOSSIPS_REQUEST: {
            return state;
        }

        case types.FETCH_GOSSIPS_SUCCESS: {
            const gossips = action.payload;
            const new_state = [];
            gossips.forEach(gossip => new_state.push(gossip.id));
            return new_state;
        }

        default: {
            return state;
        }
    }
}

// selectores
export const getGossip = (state, id) => state.byId[id];
export const getGossips = (state) => state.order.map(
    id => getGossip(state, id)
);

// reductores
export default combineReducers({byId, order});;