import * as types from '../types';

import uuidv4 from 'uuid/v4';


export const postGossip = (
    title,
    content,
    date,
) => ({
    type: types.GOSSIP_POSTED,
    payload: {
        id:  uuidv4(),
        title,
        content,
        date,
    }
});

export const removeGossip = (
    id,
) => ({
    type: types.GOSSIP_REMOVED,
    payload: id
})

export const updateGossip = (
    old_id,
    id,
    title,
    content,
    date,
) => ({
    type: types.GOSSIP_UPDATED,
    payload: {
        old_id,
        id,
        title,
        content,
        date,
    }
})

export const fetchGossipsRequest = () => ({
    type: types.FETCH_GOSSIPS_REQUEST,
})

export const fetchGossipsSuccess = (
    gossips
) => ({
    type: types.FETCH_GOSSIPS_SUCCESS,
    payload: gossips
})