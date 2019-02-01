import React, { Component } from "react";
import PreviewTemplate from "./previewTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import ExerciseForm from "./exerciseForm";

class AddNewTemplate extends Component {
  render() {
    const {
      todoItems,
      templateTitle,
      onTodoSubmit,
      onTodoEdit,
      onTemplateSubmit,
      onTitleChange,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;

    return (
      <React.Fragment>
        <ExerciseForm onTodoSubmit={onTodoSubmit} />
        <div id="transfer-arrow">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        <PreviewTemplate
          todoItems={todoItems}
          templateTitle={templateTitle}
          onTodoEdit={onTodoEdit}
          onTemplateSubmit={onTemplateSubmit}
          onTitleChange={onTitleChange}
          onShiftUp={onShiftUp}
          onShiftDown={onShiftDown}
          onDelete={onDelete}
        />
      </React.Fragment>
    );
  }
}

export default AddNewTemplate;
