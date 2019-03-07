import React, { Component } from "react";
import PreviewWorkout from "./previewWorkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import ExerciseForm from "./exerciseForm";

class AddNewWorkout extends Component {
  render() {
    const {
      exercises,
      workoutTitle,
      onExerciseSubmit,
      onExerciseEdit,
      onWorkoutSubmit,
      onTitleChange,
      onShiftUp,
      onShiftDown,
      onDelete
    } = this.props;

    return (
      <React.Fragment>
        <ExerciseForm onExerciseSubmit={onExerciseSubmit} />
        <div id="transfer-arrow">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        <PreviewWorkout
          exercises={exercises}
          workoutTitle={workoutTitle}
          onExerciseEdit={onExerciseEdit}
          onWorkoutSubmit={onWorkoutSubmit}
          onTitleChange={onTitleChange}
          onShiftUp={onShiftUp}
          onShiftDown={onShiftDown}
          onDelete={onDelete}
        />
      </React.Fragment>
    );
  }
}

export default AddNewWorkout;
