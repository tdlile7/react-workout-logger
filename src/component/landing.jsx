import React, { Component } from "react";
import Register from "./register";
import Login from "./login";
import DescriptionSection from "./descriptionSection";
import Footer from "./footer";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="landing-headline" className="jumbotron">
          <h1>Workout Exercise Planner</h1>
        </div>
        <div id="sign-in">
          <div id="landing-background" />
          <Register />
          <Login />
        </div>
        <DescriptionSection />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
