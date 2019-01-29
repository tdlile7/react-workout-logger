import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class ExerciseForm extends Form {
  state = {
    data: {
      name: "",
      reps: "",
      sets: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    reps: Joi.number()
      .required()
      .min(0)
      .max(30)
      .label("Reps"),
    sets: Joi.number()
      .required()
      .min(0)
      .max(20)
      .label("Sets")
  };

  doSubmit = () => {
    this.props.onTodoSubmit(this.state.data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("reps", "Reps", "number")}
        {this.renderInput("sets", "Sets", "number")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default ExerciseForm;
