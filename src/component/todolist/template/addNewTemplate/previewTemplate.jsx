import React, { Component } from "react";
import ExerciseList from "./exerciseList";
import PreviewTemplateTitle from "./previewTemplateTitle";
import PreivewTemplateSubmitBtn from "./previewTemplateSubmitBtn";

class PreviewTemplate extends Component {
  render() {
    const {
      todoItems,
      templateTitle,
      onTemplateSubmit,
      onTodoEdit,
      onTitleChange,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;

    return (
      <div id="custom-template">
        <div id="exercise-list-container">
          <PreviewTemplateTitle
            templateTitle={templateTitle}
            onTitleChange={onTitleChange}
          />
          <ExerciseList
            todoItems={todoItems}
            onTodoEdit={onTodoEdit}
            onShiftUp={onShiftUp}
            onShiftDown={onShiftDown}
            onDelete={onDelete}
          />
        </div>
        <PreivewTemplateSubmitBtn
          onTemplateSubmit={onTemplateSubmit}
          todoItems={todoItems}
        />
      </div>
    );
  }
}

export default PreviewTemplate;
