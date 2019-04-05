import React, { Component } from "react";
import ContentNav from "../shared/contentNav";
import LogForm from "./logForm";
import { Route } from "react-router-dom";
import AddNewLog from "./addNewLog";
import ViewLogs from "./viewLogs";

class Logger extends Component {
  handleWorkoutSelected = workout => {
    const data = this.generateFormData(workout);

    localStorage.setItem("workout", JSON.stringify(workout));
    localStorage.setItem("data", JSON.stringify(data));
  };

  generateInputName = (exerciseName, inputType, setNumber) => {
    const exercise = exerciseName.replace(" ", "").toLowerCase();
    return `${exercise}${inputType}${setNumber}`;
  };

  generateFormData = workout => {
    const formData = {};
    const { exercises } = workout;

    exercises.map(exercise => {
      let { name, sets } = exercise;

      for (let i = 1; i <= sets; i++) {
        const reps = this.generateInputName(name, "reps", i);
        const weight = this.generateInputName(name, "weight", i);
        formData[reps] = 0;
        formData[weight] = 0;
      }
      return null;
    });

    return formData;
  };

  render() {
    const { workouts, logs, onLogSubmit, onLogDelete } = this.props;

    return (
      <div id="logger">
        <Route
          path="/workout-app/logs"
          exact
          render={props => (
            <ContentNav path="logs" component={"Logs"} {...props} />
          )}
        />
        <Route
          path="/workout-app/logs/new/:id"
          exact
          render={props => (
            <LogForm
              generateInputName={this.generateInputName}
              onLogSubmit={onLogSubmit}
              {...props}
            />
          )}
        />
        <Route
          path="/workout-app/logs/new"
          exact
          render={props => (
            <AddNewLog
              onWorkoutSelected={this.handleWorkoutSelected}
              workouts={workouts}
              {...props}
            />
          )}
        />
        <Route
          path="/workout-app/logs/all"
          render={props => (
            <ViewLogs logs={logs} onLogDelete={onLogDelete} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Logger;
