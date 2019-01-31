import React, { Component } from "react";
import CustomTemplate from "./customTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import ExerciseForm from "./exerciseForm";

class AddNewTemplate extends Component {
  render() {
    const {
      onTodoSubmit,
      onTodoEdit,
      onTemplateSubmit,
      onTitleChange,
      onShiftUp,
      onShiftDown,
      onDelete,
      todoItems,
      templateTitle
    } = this.props;
    return (
      <React.Fragment>
        <ExerciseForm onTodoSubmit={onTodoSubmit} />
        <div id="transfer-arrow">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        <CustomTemplate
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
