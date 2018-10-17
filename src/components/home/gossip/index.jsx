import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import * as selectores from '../../../reducers';
import { dispatch } from 'rxjs/internal/observable/pairs';

const Gossip = ({
    id,
    gossip,
    onClickHandle
}) => (
    <ul key={id}>
        <span>{`id: ${gossip.id} title: ${gossip.title}`}</span>
        <button onClick= {onClickHandle}> X </button>
    </ul>
);


export default connect(
    (state, {id}) => ({
        gossip: selectores.getGossip(state, id),
        id,
    }),
    (dispatch, {id}) => ({
        onClickHandle: () => {
            console.log(id);
            dispatch(actions.removeGossip(id))
        }
    })
)(Gossip);