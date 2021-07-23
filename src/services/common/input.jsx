import React from "react";

const Input = ({ name, label, value, onChange, styles, error, type }) => {
  return (
    <div className="form-group mb-3" style={styles}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

/* After the input element I added a conditional state that will dynamically render a div. If the error object is truthy
 meaning it has a property value, then it will return the div. Otherwise if it is falsy (meaning the error value is equivalent
 to '', false, undefined, null, and a few more falsy values then it will not render the div).  */
