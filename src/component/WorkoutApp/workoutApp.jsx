import React, { Component } from "react";
import Logger from "./logs/logger";
import WorkoutTemplate from "./workouts/workoutTemplate";
import SubNav from "./shared/subNav";
import Instructions from "./instructions/instructions";
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

  async componentDidMount() {
    //If user is not logged in, browser will be redirected to landing page
    const user = auth.getCurrentUser();
    if (!user) this.props.history.replace("/");
    else {
      var tokenExp = user.exp;
      var currentTime = new Date().getTime() / 1000;

      //Check if jwt token has expired. If so, user will be logged out.
      if (currentTime > tokenExp) {
        auth.logout();

        //Display message to browser when jwt token has expired.
        toast.error("Session has expired. Please login again.");
        this.props.history.replace("/");
        return;
      }

      //Request saved workouts and logs previously submitted to the database for current logged in user.
      const { data: workouts } = await getWorkouts();
      const { data: logs } = await getLogs();

      this.setState({ workouts, logs });
    }
  }

  //Submit new workout to the database
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

  //Delete a selected previously saved workout from the database
  handleWorkoutDelete = async workoutId => {
    await deleteWorkout(workoutId);
    const { data: workouts } = await getWorkouts();
    this.props.history.push("/workout-app/workouts");
    this.setState({ workouts });
  };

  //Submit new log to the database
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

  //Delete a selected previously saved log from the database
  handleLogDelete = async logId => {
    await deleteLog(logId);
    const { data: logs } = await getLogs();
    this.props.history.push("/workout-app/logs");
    this.setState({ logs });
  };

  //Remaining functions pertain to a new workout template being created

  //Change title of the new workout template
  handleTitleChange = newTitle => {
    this.setState({ workoutTitle: newTitle });
  };

  //Add new exercise to new workout template's exercise list
  handleExerciseSubmit = exercise => {
    if (this.state.exercises.length === 0)
      this.setState({ exercises: [exercise] });
    else {
      const exercises = [...this.state.exercises];
      exercises.push(exercise);
      this.setState({ exercises });
    }
  };

  //Edit an exercise on the exercise list
  handleExerciseEdit = (exercise, index) => {
    const exercises = [...this.state.exercises];
    const id = exercises[index].id;
    exercises[index] = { id, ...exercise };
    this.setState({ exercises });
  };

  //Delete an exercise on the exercise list
  handleDelete = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    exercises.splice(index, 1);
    this.setState({ exercises });
  };

  //Move an exercise up one space on the exercise list
  handleShiftUp = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    const temp = exercises[index - 1];
    exercises[index - 1] = exercise;
    exercises[index] = temp;
    this.setState({ exercises });
  };

  //Move an exercise down one space on the exercise list
  handleShiftDown = exercise => {
    let exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    const temp = exercises[index + 1];
    exercises[index + 1] = exercise;
    exercises[index] = temp;
    this.setState({ exercises });
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
