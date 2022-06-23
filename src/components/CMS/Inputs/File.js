import React from 'react';
export default ({
  id,
  label,
  fields,
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  placeholder,
  meta: {touched, error},
  ...props
}) => {
  const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
  return (
    <div className="form-group">
    <label style={{marginBottom: 0}} id={id}>{label}</label>
    <input
      className="file-form-input"
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
    </div>
  );
}
