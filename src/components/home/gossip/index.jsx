import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions';
import * as selectores from '../../../reducers';

import * as routes from '../../../routes';

import './gossip.css';


const Gossip = ({
  id,
  gossip,
  onDeleteHandle,
  onMoreHandle,
  history
}) => (
    <ul className="gossip" key={id}>
      <div className="card">
        <div className="header">
          <p className="identifier"> {`# ${gossip.id}`} </p>
          <p className="date"> {`${gossip.date}`} </p>
          <a className="button delete" onClick={ onDeleteHandle }> <i class="far fa-trash-alt"></i> </a>
        </div>
        <div className="title">
          { gossip.title }
        </div>
        <div className="content">
          <span className="text">
            { gossip.content.substring(0, 150) }
          </span>
        </div>
        <div className="footer" onClick={() => onMoreHandle()}  >
          <Link to={ routes.POST } style={{ textDecoration: 'none' }}><a className="button add" > <i class="fas fa-plus"></i> </a></Link>
        </div>
        
      </div>
    </ul>
);


export default connect(
  (state, { id }) => ({
    gossip: selectores.getGossip(state, id),
    id,
  }),
  (dispatch, { id }) => ({
    onDeleteHandle: () => {
      console.log(id);
      dispatch(actions.removeGossip(id))
    },
    onMoreHandle: (history) => {
      console.log(id)
      dispatch(actions.setCurrentGossip(id))
    }
  })
)(Gossip);