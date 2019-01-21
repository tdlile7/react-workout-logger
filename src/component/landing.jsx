import React, { Component } from "react";
import Register from "./register";
import Login from "./login";
import { Jumbotron } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1>Workout Exercise Planner</h1>
        </Jumbotron>
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
