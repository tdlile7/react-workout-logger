import React, { Component } from "react";
import ExerciseList from "./exerciseList";
import EditTemplateTitle from "./editTemplateTitle";
import Modal from "./common/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class CustomTemplate extends Component {
  render() {
    const {
      onTemplateSubmit,
      onTodoEdit,
      onTitleChange,
      onDelete,
      todoItems,
      templateTitle,
      onShiftUp,
      onShiftDown
    } = this.props;

    let submitBtnClasses = "btn btn-primary ";
    if (todoItems.length === 0) submitBtnClasses += "disabled";

    return (
      <div id="custom-template">
        <div id="exercise-list-container">
          <h2>
            {templateTitle}
            <Modal
              title="Edit_Title"
              body={
                <EditTemplateTitle
                  modalTitle="Edit_Title"
                  onTitleChange={onTitleChange}
                />
              }
              btnClasses="btn btn-dark"
              btnCover={<FontAwesomeIcon icon={faEdit} />}
            />
          </h2>
          <ExerciseList
            todoItems={todoItems}
            onTodoEdit={onTodoEdit}
            onShiftUp={onShiftUp}
            onShiftDown={onShiftDown}
            onDelete={onDelete}
          />
        </div>
        <div id="submit-template-form-btn">
          <button
            type="button"
            class={submitBtnClasses}
            onClick={() => onTemplateSubmit(todoItems)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CustomTemplate;
