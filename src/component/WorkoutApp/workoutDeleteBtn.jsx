import React, { Component } from "react";

class WorkoutDeleteBtn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onWorkoutDelete, workout } = this.props;
    onWorkoutDelete(workout._id);
  };

  render() {
    const { workout, modalId } = this.props;
    const dataToggle = "modal";
    const dataTarget = `#${modalId}`;
    const title = workout.title;
    return (
      <div>
        {title}
        <button
          onClick={this.handleSubmit}
          data-toggle={dataToggle}
          data-target={dataTarget}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default WorkoutDeleteBtn;
