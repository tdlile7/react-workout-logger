import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class EditExercise extends Form {
  state = {
    data: {
      name: this.props.name,
      reps: this.props.reps,
      sets: this.props.sets
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
    const { onExerciseEdit } = this.props;
    onExerciseEdit(this.state.data, this.props.index);
  };

  render() {
    const modalTarget = `#${this.props.modalTitle}`;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name", "text")}
        {this.renderInput("reps", "Reps", "number", 1, 30)}
        {this.renderInput("sets", "Sets", "number", 1, 20)}
        {this.renderButton("Save", "modal", modalTarget)}
      </form>
    );
  }
}

export default EditExercise;
