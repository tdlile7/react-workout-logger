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
        <ul>
          <li>
            First create and save custom workout routines that you will use as
            templates for future workouts.{" "}
          </li>
          <li>
            Create new logs which will follow the outline of a previously saved
            template to help record your weights for each set of every exercise
            performed in the routine.
          </li>
          <li>
            View previously saved logs to track and observe your progress.
          </li>
        </ul>
      </div>
    );
  }
}

export default Instructions;
