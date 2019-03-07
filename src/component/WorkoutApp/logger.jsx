import React, { Component } from "react";
import ContentNav from "../common/contentNav";
import { Route } from "react-router-dom";
import AddNewLog from "./addNewLog";

class Logger extends Component {
  render() {
    const { workouts } = this.props;
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
          path="/workout-app/logs/new"
          render={props => <AddNewLog workouts={workouts} {...props} />}
        />
      </div>
    );
  }
}

export default Logger;
