import React from 'react';

export default ({id, label, input, placeholder, meta: {touched, error}}) => {
  return (
    <div className="form-group">
      <label style={{marginBottom: 0}} id={id}>{label}</label>
      <textarea {...input} className="form-field fill-width" placeholder={touched && error ? error : placeholder}/>
    </div>
  )
}
