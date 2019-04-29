import React, { Component } from "react";
import ExerciseList from "./exerciseList";
import WorkoutTitle from "./workoutTitle";
import WorkoutSubmitBtn from "./workoutSubmitBtn";

class PreviewWorkout extends Component {
  render() {
    const {
      exercises,
      workoutTitle,
      onWorkoutSubmit,
      onExerciseEdit,
      onTitleChange,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;

    return (
      <div id="custom-workout">
        <div id="preview">
          <WorkoutTitle
            workoutTitle={workoutTitle}
            onTitleChange={onTitleChange}
          />
          <ExerciseList
            exercises={exercises}
            onExerciseEdit={onExerciseEdit}
            onShiftUp={onShiftUp}
            onShiftDown={onShiftDown}
            onDelete={onDelete}
          />
        </div>
        <WorkoutSubmitBtn
          onWorkoutSubmit={onWorkoutSubmit}
          exercises={exercises}
        />
      </div>
    );
  }
}

export default PreviewWorkout;
