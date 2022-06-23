import React, { Component } from 'react';

export default ({id, label, input, values, display, placeholder, meta: {touched, error}}) => {
  var text = "";
  values.map((item, i) => {
    if(i == values.length - 1){
      text = text + item[display];
    } else {
      text = text + item[display] + ", ";
    }
  })
  return (
    <div className="form-group">
      <label style={{marginBottom: 0}} id={id}>{label}</label>
      <input {...input} className="form-field fill-width" placeholder={touched && error ? error : text}/>
    </div>
  )
}
