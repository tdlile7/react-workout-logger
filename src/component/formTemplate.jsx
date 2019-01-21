import React from "react";
import FormField from "./formField";
import { Button, Form } from "react-bootstrap";

const FormTemplate = ({ onTodoSubmit, onInputChange, inputs }) => {
  return (
    <Form onSubmit={onTodoSubmit}>
      {inputs.map(({ type, name, value }, i) => {
        return (
          <FormField
            type={type}
            name={name}
            value={value}
            onInputChange={onInputChange}
            key={i}
          />
        );
      })}
      <Button type="submit" bsStyle="warning">
        Add
      </Button>
    </Form>
  );
};

export default FormTemplate;
