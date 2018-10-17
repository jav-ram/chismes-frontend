import React from 'react';
import { connect } from 'react-redux';

import GossipList from '../gossipsContainer';
import PostForm from '../postForm';

import * as actions from '../../../actions';

class GossipContainer extends React.Component {

    constructor(props) {
        super(props)
        this.fetchAll = this.props.fetchAll;
    }

    componentWillMount() {
        this.props.fetchAll();
    }

    render() {
        return (
            <div>
                <GossipList />
                <PostForm />
            </div>
        );
    }
}

export default connect(
    undefined,
    (dispatch) => ({
        fetchAll: () => {
            dispatch(actions.fetchGossipsRequest())
        },
    })
)(GossipContainer);