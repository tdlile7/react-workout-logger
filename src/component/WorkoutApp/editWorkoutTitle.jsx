import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class EditWorkoutTitle extends Form {
  state = {
    data: {
      title: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title")
  };

  doSubmit = () => {
    const data = { ...this.state.data };
    const newTitle = data.title;
    this.props.onTitleChange(newTitle);
    data.title = "";
    this.setState({ data });
  };

  render() {
    const title = "Edit Workout Title";
    const modalTarget = `#${this.props.modalTitle}`;
    return (
      <form id="template-title-edit-form" onSubmit={this.handleSubmit}>
        {this.renderInput(title, "title", "Title")}
        {this.renderButton("Save", "modal", modalTarget)}
      </form>
    );
  }
}

export default EditWorkoutTitle;
