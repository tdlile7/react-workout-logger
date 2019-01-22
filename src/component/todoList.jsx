import React, { Component } from "react";
import Log from "./log";
import Template from "./template";
import SubNav from "./subNav";
import Intro from "./intro";
import { Route } from "react-router-dom";
import "../assets/stylesheets/section.scss";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <SubNav />
        <div id="section">
          <div id="section-background" />
          <Route path="/todolist/intro" component={Intro} />
          <Route path="/todolist/logs" component={Log} />
          <Route path="/todolist/templates" component={Template} />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
