import React, { Component } from "react";

class ViewWorkouts extends Component {
  render() {
    const { workouts } = this.props;
    return (
      <div id="templates-container">
        {workouts.length === 0 && <h1>No workouts have been saved</h1>}
        {workouts.map(workout => {
          return (
            <div className="row">
              <h2>{workout.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewWorkouts;
