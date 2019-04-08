import React, { Component } from "react";

class ViewWorkout extends Component {
  render() {
    const { workout } = this.props;
    const { exercises } = workout;

    return (
      <React.Fragment>
        <ul>
          {exercises.map((exercise, index) => {
            return (
              <li>{`${index + 1}. ${exercise.name} for ${
                exercise.sets
              } sets, target is ${exercise.reps} reps per set `}</li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default ViewWorkout;
