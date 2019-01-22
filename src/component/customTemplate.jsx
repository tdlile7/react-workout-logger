import React, { Component } from "react";
import ExerciseList from "./exerciseList";

class CustomTemplate extends Component {
  render() {
    const { onDelete, todoItems } = this.props;
    return (
      <div id="custom-template">
        <div id="exercise-list-container">
          <h2>Arm Day</h2>
          <ExerciseList todoItems={todoItems} onDelete={onDelete} />
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
