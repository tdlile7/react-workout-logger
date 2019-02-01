import React, { Component } from "react";
import Logger from "./logger/logger";
import Template from "./template/template";
import SubNav from "./subNav";
import Intro from "./intro/intro";
import { Route } from "react-router-dom";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <SubNav />
        <div id="section">
          <div id="section-background" />
          <Route path="/todolist/intro" component={Intro} />
          <Route path="/todolist/logger" component={Logger} />
          <Route path="/todolist/template" component={Template} />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
