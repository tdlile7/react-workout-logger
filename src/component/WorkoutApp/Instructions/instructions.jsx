import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <div id="instructions">
        <h3>Purpose of Application:</h3>
        <p>
          Observe progress in the gym by tracking growth overtime for different
          exercises.
        </p>
        <h3>How to Get Started:</h3>
        <ol>
          <li>
            First create and save custom workout routines which you will use as
            templates for future workouts.
          </li>
          <li>
            Create new logs to record weights performed for each set of every
            exercise within a chosen saved routine.
          </li>
          <li>
            View previously saved logs to track and observe your progress.
          </li>
        </ol>
      </div>
    );
  }
}

export default Instructions;
