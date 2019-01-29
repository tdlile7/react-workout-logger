import React, { Component } from "react";
import ExerciseForm from "./exerciseForm";

class TemplateForm extends Component {
  render() {
    const { onTodoSubmit } = this.props;
    return (
      <div id="template-form">
        <h2>
          <span class="badge badge-secondary">Template Form</span>
        </h2>
        <ExerciseForm onTodoSubmit={onTodoSubmit} />
      </div>
    );
  }
}

export default TemplateForm;
