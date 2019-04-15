import React, { Component } from "react";
import Logger from "./Logs/logger";
import WorkoutTemplate from "./Workouts/workoutTemplate";
import SubNav from "./shared/subNav";
import Instructions from "./Instructions/instructions";
import {
  getWorkouts,
  saveWorkout,
  deleteWorkout
} from "../../services/workoutService";
import {
  getLogs,
  saveLog,
  deleteLog
} from "../../services/logComponentService";
import auth from "../../services/authService";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";

class WorkoutApp extends Component {
  state = {
    exercises: [],
    logs: [],
    workouts: [],
    workoutTitle: "Workout Name"
  };

  //If user is not logged in, browser will be redirected to landing page
  async componentDidMount() {
    const user = auth.getCurrentUser();
    if (!user) this.props.history.replace("/");
    else {
      var tokenExp = user.exp;
      var currentTime = new Date().getTime() / 1000;
      if (currentTime > tokenExp) {
        auth.logout();
        toast.error("Session has expired. Please login again.");
        this.props.history.replace("/");
        return;
      }

      const { data: workouts } = await getWorkouts();
      const { data: logs } = await getLogs();

      this.setState({ workouts, logs });
    }
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

  handleWorkoutSubmit = async workout => {
    const title = this.state.workoutTitle;
    const newWorkout = { exercises: workout, title };
    try {
      await saveWorkout(newWorkout);
      const { data: workouts } = await getWorkouts();
      this.props.history.push("/workout-app/workouts");
      this.setState({ exercises: [], workouts, workoutTitle: "Workout Name" });
    } catch (err) {
      auth.logout();
      this.props.history.replace("/");
    }
  };

  handleWorkoutDelete = async workoutId => {
    await deleteWorkout(workoutId);
    const { data: workouts } = await getWorkouts();
    this.props.history.push("/workout-app/workouts");
    this.setState({ workouts });
  };

  handleLogSubmit = async log => {
    try {
      await saveLog(log);
      const { data: logs } = await getLogs();
      this.props.history.push("/workout-app/logs");
      this.setState({ logs });
    } catch (err) {
      auth.logout();
      this.props.history.replace("/");
    }
  };

  handleLogDelete = async logId => {
    await deleteLog(logId);
    const { data: logs } = await getLogs();
    this.props.history.push("/workout-app/logs");
    this.setState({ logs });
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
    const { exercises, workouts, logs, workoutTitle } = this.state;

    return (
      <React.Fragment>
        <SubNav />
        <div id="section">
          <div id="section-background" />
          <Route path="/workout-app/instructions" component={Instructions} />
          <Route
            path="/workout-app/logs"
            render={props => (
              <Logger
                workouts={workouts}
                logs={logs}
                onLogSubmit={this.handleLogSubmit}
                onLogDelete={this.handleLogDelete}
                {...props}
              />
            )}
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
                onWorkoutDelete={this.handleWorkoutDelete}
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
