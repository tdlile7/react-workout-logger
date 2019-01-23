import React from "react";
import Form from "./common/formTemplate";

const ExerciseForm = ({ onTodoSubmit, onInputChange, exercise }) => {
  const { Name, Reps, Sets } = exercise;
  const formInputs = [
    {
      type: "text",
      name: "Name",
      value: Name
    },
    {
      type: "number",
      name: "Reps",
      value: Reps
    },
    {
      type: "number",
      name: "Sets",
      value: Sets
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
