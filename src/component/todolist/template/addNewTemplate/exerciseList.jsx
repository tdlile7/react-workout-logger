import React, { Component } from "react";
import Exercise from "./exercise";

class ExerciseList extends Component {
  render() {
    const {
      todoItems,
      onTodoEdit,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;
    return (
      <ul id="exercise-list">
        {todoItems.map((exercise, i, arr) => {
          return (
            <Exercise
              exercise={exercise}
              onTodoEdit={onTodoEdit}
              onShiftUp={onShiftUp}
              onShiftDown={onShiftDown}
              onDelete={onDelete}
              index={i}
              length={arr.length}
              key={i}
            />
          );
        })}
      </ul>
    );
  }
}

export default ExerciseList;