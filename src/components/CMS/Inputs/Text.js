import React from 'react';

export default ({id, label, type, input, placeholder, meta: {touched, error}}) => {
  return (
    <div className="form-group">
      <label style={{marginBottom: 0}} id={id}>{label}</label>
      <input {...input} className="form-field fill-width" name={input.name} type={type === 'password' ? 'password' : 'text'} placeholder={touched && error ? error : placeholder}/>
    </div>
  )
}
