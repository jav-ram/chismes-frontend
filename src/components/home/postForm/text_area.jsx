import React from 'react'
import './form.css';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="section">
    <div className="input-field">
      <textarea className="input" id={`${input.name}`} {...input} type={type} />
      {touched && error && <span>{error}</span>}
      <label htmlFor={`${input.name}`}>{label}</label>
    </div>
  </div>
);

export default renderField;