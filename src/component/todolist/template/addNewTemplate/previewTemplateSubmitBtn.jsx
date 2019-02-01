import React, { Component } from "react";

class PreviewTemplateSubmitBtn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onTemplateSubmit, todoItems } = this.props;
    onTemplateSubmit(todoItems);
  };

  render() {
    const { todoItems } = this.props;
    let submitBtnClasses = "btn btn-primary ";
    if (todoItems.length === 0) submitBtnClasses += "disabled";

    return (
      <div id="submit-template-form-btn">
        <button
          type="button"
          class={submitBtnClasses}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default PreviewTemplateSubmitBtn;
