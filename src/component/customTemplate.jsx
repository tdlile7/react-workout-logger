import React, { Component } from "react";
import ExerciseList from "./exerciseList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class CustomTemplate extends Component {
  render() {
    const { onDelete, todoItems, onShiftUp, onShiftDown } = this.props;
    return (
      <div id="custom-template">
        <div id="exercise-list-container">
          <h2>
            Template Name
            <button type="button" class="btn btn-dark">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </h2>
          <ExerciseList
            todoItems={todoItems}
            onShiftUp={onShiftUp}
            onShiftDown={onShiftDown}
            onDelete={onDelete}
          />
        </div>
        <div id="submit-template-form-btn">
          <button type="button" class="btn btn-outline-primary disabled">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CustomTemplate;
