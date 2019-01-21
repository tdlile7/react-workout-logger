import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const FormField = ({ type, name, value, onInputChange }) => {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{name}</ControlLabel>
      <FormControl
        type={type}
        name={name}
        value={value}
        placeholder="Enter text"
        onChange={onInputChange}
      />
    </FormGroup>
  );
};

export default FormField;
