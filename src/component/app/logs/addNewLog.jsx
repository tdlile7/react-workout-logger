import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddNewLog extends Component {
  handleSelect = workout => {
    const { onWorkoutSelected } = this.props;
    onWorkoutSelected(workout);
  };

  render() {
    const { workouts } = this.props;
    const haveSavedWorkouts = workouts.length > 0;

    return (
      <div id="templates">
        {!haveSavedWorkouts && <h1>No templates have been saved</h1>}
        {haveSavedWorkouts && <h1>Templates:</h1>}
        <div id="template-options">
          {workouts.map((workout, i) => {
            return (
              <Link
                to={`/workout-app/logs/new/${i}`}
                onClick={() => {
                  this.handleSelect(workout);
                }}
              >
                {workout.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddNewLog;
