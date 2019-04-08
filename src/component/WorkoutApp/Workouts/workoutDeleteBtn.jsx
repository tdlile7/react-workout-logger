import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
      <React.Fragment>
        {title}
        <button
          type="button"
          className="btn btn-danger btn-md"
          onClick={this.handleSubmit}
          data-toggle={dataToggle}
          data-target={dataTarget}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </React.Fragment>
    );
  }
}

export default WorkoutDeleteBtn;
