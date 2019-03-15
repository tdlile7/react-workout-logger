import React, { Component } from "react";
import Register from "./register";
import Login from "./login";
import DescriptionSection from "./descriptionSection";
import Footer from "./footer";

class Landing extends Component {
  render() {
    const { showLoader } = this.props;
    return (
      <React.Fragment>
        <div id="landing-headline" className="jumbotron">
          <h1>Workout Exercise Logger</h1>
        </div>
        <div id="sign-in">
          <div id="landing-background" />
          <Register showLoader={showLoader} />
          <Login showLoader={showLoader} />
        </div>
        <DescriptionSection />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
