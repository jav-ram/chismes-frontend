import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="section">
      <div className="input-field">
        <input id={`${input.name}`} {...input} type={type}/>
        {touched && error && <span>{error}</span>}
        <label for={`${input.name}`}>{label}</label>
      </div>
    </div>
);

export default renderField;