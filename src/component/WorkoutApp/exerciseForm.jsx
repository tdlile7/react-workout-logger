import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

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
      .min(1)
      .max(30)
      .label("Reps"),
    sets: Joi.number()
      .required()
      .min(1)
      .max(20)
      .label("Sets")
  };

  doSubmit = () => {
    const { onExerciseSubmit } = this.props;
    const exercise = { ...this.state.data };
    onExerciseSubmit(exercise);

    //Reset input values
    const data = { ...this.state.data };
    const keys = Object.keys(data);
    keys.map(key => (data[key] = ""));
    this.setState({ data });
  };

  render() {
    const title = "Exercise Form";
    return (
      <div id="template-form">
        <h2>
          <span class="badge badge-secondary">Template Form</span>
        </h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(title, "name", "Name", "text")}
          {this.renderInput(title, "reps", "Reps", "number", 1, 30)}
          {this.renderInput(title, "sets", "Sets", "number", 1, 20)}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ExerciseForm;
