import React, { Component } from "react";
import Logger from "./logger";
import WorkoutTemplate from "./workoutTemplate";
import SubNav from "./subNav";
import Instructions from "./instructions";
import auth from "../../services/authService";
import { Route } from "react-router-dom";

class WorkoutApp extends Component {
  state = {
    exercises: [],
    workouts: [],
    workoutTitle: "Workout Name"
  };

  //If user is not logged in, browser will be redirected to landing page
  componentDidMount() {
    const user = auth.getCurrentUser();
    if (!user) window.location = "/";
  }

  handleExerciseSubmit = exercise => {
    if (this.state.exercises.length === 0)
      this.setState({ exercises: [exercise] });
    else {
      const exercises = [...this.state.exercises];
      exercises.push(exercise);
      this.setState({ exercises });
    }
  };

  handleExerciseEdit = (exercise, index) => {
    const exercises = [...this.state.exercises];
    const id = exercises[index].id;
    exercises[index] = { id, ...exercise };
    this.setState({ exercises });
  };

  handleWorkoutSubmit = workout => {
    const title = this.state.workoutTitle;
    const newWorkout = { workout, title };
    if (this.state.workouts.length === 0)
      this.setState({ workouts: [newWorkout] });
    else {
      const workouts = [...this.state.workouts];
      workouts.push(newWorkout);
      this.setState({ workouts });
    }
    this.setState({ exercises: [], workoutTitle: "Workout Title" });
  };

  handleDelete = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    exercises.splice(index, 1);
    this.setState({ exercises });
  };

  handleShiftUp = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    const temp = exercises[index - 1];
    exercises[index - 1] = exercise;
    exercises[index] = temp;
    this.setState({ exercises });
  };

  handleShiftDown = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    const temp = exercises[index + 1];
    exercises[index + 1] = exercise;
    exercises[index] = temp;
    this.setState({ exercises });
  };

  handleTitleChange = newTitle => {
    this.setState({ workoutTitle: newTitle });
  };
  render() {
    const { exercises, workouts, workoutTitle } = this.state;

    return (
      <React.Fragment>
        <SubNav />
        <div id="section">
          <div id="section-background" />
          <Route path="/workout-app/instructions" component={Instructions} />
          <Route
            path="/workout-app/logs"
            render={props => <Logger workouts={workouts} {...props} />}
          />
          <Route
            path="/workout-app/workouts"
            render={props => (
              <WorkoutTemplate
                exercises={exercises}
                workouts={workouts}
                workoutTitle={workoutTitle}
                onExerciseSubmit={this.handleExerciseSubmit}
                onExerciseEdit={this.handleExerciseEdit}
                onWorkoutSubmit={this.handleWorkoutSubmit}
                onDelete={this.handleDelete}
                onShiftUp={this.handleShiftUp}
                onShiftDown={this.handleShiftDown}
                onTitleChange={this.handleTitleChange}
                {...props}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default WorkoutApp;
