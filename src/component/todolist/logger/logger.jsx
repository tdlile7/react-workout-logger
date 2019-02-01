import React, { Component } from "react";
import ContentNav from "../../common/contentNav";
import { Route } from "react-router-dom";
import AddNewLog from "./addNewLog/addNewLog";

class Logger extends Component {
  render() {
    return (
      <div id="logger">
        <Route
          path="/todolist/logger"
          exact
          render={props => (
            <ContentNav path="logger" component={"Logs"} {...props} />
          )}
        />
        <Route
          path="/todolist/logger/new"
          render={props => <AddNewLog {...props} />}
        />
      </div>
    );
  }
}

export default Logger;
