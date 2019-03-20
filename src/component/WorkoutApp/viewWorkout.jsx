import React, { Component } from "react";

class ViewWorkout extends Component {
  render() {
    const { workout } = this.props;
    const { exercises } = workout;

    return (
      <div id="edit-workout-form">
        {exercises.map(exercise => {
          return (
            <li>{`Name: ${exercise.name} Reps: ${exercise.reps} Sets: ${
              exercise.sets
            }`}</li>
          );
        })}
      </div>
    );
  }
}

export default ViewWorkout;
