import React, { Component } from "react";

class WorkoutSubmitBtn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onWorkoutSubmit, exercises } = this.props;
    onWorkoutSubmit(exercises);
    window.location = "/workout-app/workouts";
  };

  render() {
    const { exercises } = this.props;
    let submitBtnClasses = "btn btn-primary ";
    if (exercises.length === 0) submitBtnClasses += "disabled";

    return (
      <div id="submit-template-form-btn">
        <button
          type="button"
          class={submitBtnClasses}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default WorkoutSubmitBtn;
