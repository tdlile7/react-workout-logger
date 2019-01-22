import React from "react";

const FormGroup = ({ type, name, value, onInputChange }) => {
  return (
    <div class="form-group">
      <label htmlFor={name}>{name}</label>
      <input
        placeholder="Enter text"
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default FormGroup;
