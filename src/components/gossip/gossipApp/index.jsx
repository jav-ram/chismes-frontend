import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
const GossipApp = ({
    title,
    content,
    date,
}) => (
    <div >
        <h1> { title } </h1>
        <p> { date } </p>
        <p> { content } </p>
    </div>
);

export default connect(
    state => {
        const gossip = selectors.getGossip(state, state.current);

        return {
            ...gossip,
        }
    },
    undefined,
)(GossipApp);