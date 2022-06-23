import React from 'react';
export default ({id, label, input, placeholder, meta: {touched, error}}) => {
  return (
    <div hidden={true} className="form-group">
      <label style={{marginBottom: 0}} id={id}>{label}</label>
      <input {...input} className="form-field fill-width" name={input.id} placeholder={touched && error ? error : placeholder}/>
    </div>
  )
}
