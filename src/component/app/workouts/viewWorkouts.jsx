import React, { Component } from "react";
import ViewWorkout from "./viewWorkout";
import WorkoutDeleteBtn from "./workoutDeleteBtn";
import Modal from "../../common/modal";

class ViewWorkouts extends Component {
  render() {
    const { workouts, onWorkoutDelete } = this.props;
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
              modalTitle={
                <WorkoutDeleteBtn
                  workout={workout}
                  onWorkoutDelete={onWorkoutDelete}
                  modalId={modalId}
                />
              }
              modalBody={<ViewWorkout workout={workout} />}
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
