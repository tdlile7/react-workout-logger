import React, { Component } from "react";
import Exercise from "./exercise";

class ExerciseList extends Component {
  render() {
    const {
      exercises,
      onExerciseEdit,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;
    return (
      <ul id="exercise-list">
        {exercises.map((exercise, i, arr) => {
          return (
            <Exercise
              exercise={exercise}
              onExerciseEdit={onExerciseEdit}
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
