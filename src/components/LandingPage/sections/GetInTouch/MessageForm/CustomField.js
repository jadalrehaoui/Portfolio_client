import React from 'react';

export default ({input, placeholder, meta: {touched, error} }) => {
  if(input.name == "content") {
    return (
      <div className="form-group">
        <textarea {...input} className="form-field" placeholder={touched && error ? error : placeholder }></textarea>
      </div>
    )
  }
  return (
    <div className="form-group">
      <input {...input} className="form-field" placeholder={touched && error ? error : placeholder}/>
    </div>
  )
}
