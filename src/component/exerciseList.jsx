import React, { Component } from "react";
import Exercise from "./exercise";

class ExerciseList extends Component {
  render() {
    const { todoItems, onDelete } = this.props;
    return (
      <ul id="exercise-list">
        {todoItems.map((exercise, i, arr) => {
          return (
            <Exercise
              exercise={exercise}
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
