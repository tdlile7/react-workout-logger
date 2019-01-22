import React from "react";
import FormGroup from "./formGroup";

const FormTemplate = ({ onTodoSubmit, onInputChange, inputs }) => {
  return (
    <form onSubmit={onTodoSubmit}>
      {inputs.map(({ type, name, value }, i) => {
        return (
          <FormGroup
            type={type}
            name={name}
            value={value}
            onInputChange={onInputChange}
            key={i}
          />
        );
      })}
      <button type="submit" class="btn btn-warning">
        Add
      </button>
    </form>
  );
};

export default FormTemplate;
