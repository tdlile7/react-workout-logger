import React, { Component } from "react";
import ContentNav from "../common/contentNav";
import AddNewWorkout from "./addNewWorkout";
import ViewWorkouts from "./viewWorkouts";
import { Route } from "react-router-dom";

class WorkoutTemplate extends Component {
  render() {
    const {
      exercises,
      workoutTitle,
      workouts,
      onExerciseSubmit,
      onExerciseEdit,
      onWorkoutSubmit,
      onDelete,
      onShiftUp,
      onShiftDown,
      onTitleChange
    } = this.props;
    return (
      <div id="template">
        <Route
          path="/workout-app/workouts"
          exact
          render={props => (
            <ContentNav path="workouts" component={"Workouts"} {...props} />
          )}
        />
        <Route
          path="/workout-app/workouts/new"
          render={props => (
            <AddNewWorkout
              exercises={exercises}
              workoutTitle={workoutTitle}
              onExerciseSubmit={onExerciseSubmit}
              onExerciseEdit={onExerciseEdit}
              onWorkoutSubmit={onWorkoutSubmit}
              onTitleChange={onTitleChange}
              onShiftUp={onShiftUp}
              onShiftDown={onShiftDown}
              onDelete={onDelete}
              {...props}
            />
          )}
        />
        <Route
          path="/workout-app/workouts/all"
          render={props => <ViewWorkouts workouts={workouts} {...props} />}
        />
      </div>
    );
  }
}

export default WorkoutTemplate;
