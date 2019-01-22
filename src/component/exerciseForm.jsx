import React from "react";
import Form from "./common/formTemplate";

const ExerciseForm = ({ onTodoSubmit, onInputChange, exercise }) => {
  const { name, reps, sets } = exercise;
  const formInputs = [
    {
      type: "text",
      name: "name",
      value: name
    },
    {
      type: "number",
      name: "reps",
      value: reps
    },
    {
      type: "number",
      name: "sets",
      value: sets
    }
  ];

  return (
    <Form
      onTodoSubmit={onTodoSubmit}
      onInputChange={onInputChange}
      inputs={formInputs}
      className="example-form-class"
    />
  );
};

export default ExerciseForm;
