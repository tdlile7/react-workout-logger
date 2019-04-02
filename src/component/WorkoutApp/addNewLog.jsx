import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddNewLog extends Component {
  handleSelect = workout => {
    const { onWorkoutSelected } = this.props;
    onWorkoutSelected(workout);
  };

  render() {
    const { workouts } = this.props;
    return (
      <div className="log-group">
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
    );
  }
}

export default AddNewLog;
