import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../../actions';

import customField from './text_field';
import customTextArea from './text_area';

import './form.css';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="title"
          type="text"
          component={customField}
          label="Titulo"
        />
        <Field
          name="content"
          type="textarea"
          component={customTextArea}
          label="Contenido"
        />
        <button type="submit" > Enviar </button>
      </form>
    );
  }

}

const ConnectPostForm = connect(
  state => ({
    d: state,
  }),
  dispatch => ({
    onSubmit: (values, dispatch) => {
      const post = {
        ...values,
        date: Date.now()
      }
      console.log(post);
      dispatch(actions.postGossip(post.title, post.content, post.date));
    },
  })
)(PostForm)

export default reduxForm({
  form: 'create_post',
})(ConnectPostForm);