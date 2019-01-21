import React, { Component } from "react";
import Register from "./register";
import Login from "./login";
import { Jumbotron } from "react-bootstrap";
import "../assets/stylesheets/landing.css";

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <Jumbotron>
          <h1>Workout Exercise Planner</h1>
        </Jumbotron>
        <div className="entry-point">
          <div className="background-image" />
          <Register />
          <Login />
        </div>
      </div>
    );
  }
}

export default Landing;
