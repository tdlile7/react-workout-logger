import React, { Component } from "react";
import Register from "./register";
import Login from "./login";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1>Workout Exercise Planner</h1>
        </div>
        <div id="sign-in">
          <div id="landing-background" />
          <Register />
          <Login />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
