import React from "react";

const Input = ({ name, label, error, title, ...rest }) => {
  const _id = title + name;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={_id} className="form-control" />
      {error && <div className="alert errorMessage alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
