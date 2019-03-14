import React, { Component } from "react";
import Modal from "../common/modal";

class ViewWorkouts extends Component {
  render() {
    const { workouts } = this.props;
    const haveSavedWorkouts = workouts.length > 0;
    const modalBtnClasses = "btn btn-dark";

    return (
      <div id="workouts-container">
        {!haveSavedWorkouts && <h1>No workouts have been saved</h1>}
        {haveSavedWorkouts && <h1>Saved Workouts:</h1>}
        {workouts.map((workout, index) => {
          const modalId = workout.title.replace(" ", "") + index;
          return (
            <Modal
              modalId={modalId}
              modalTitle={workout.title}
              modalBody={<h3>Hello</h3>}
              modalBtnTitle={workout.title}
              modalBtnClasses={modalBtnClasses}
            />
          );
        })}
      </div>
    );
  }
}

export default ViewWorkouts;
