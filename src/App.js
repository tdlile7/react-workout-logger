import React, { Component } from "react";
import WorkoutApp from "./component/workoutApp/workoutApp";
import NavBar from "./component/fixed/navBar";
import Landing from "./component/landing/landing";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./assets/stylesheets/app.scss";

class App extends Component {
  async componentDidMount() {
    await setTimeout(this.props.hideLoader, 1000);
  }

  render() {
    const { showLoader } = this.props;

    //Check if a user is currently logged in
    const user = auth.getCurrentUser();

    return (
      <div id="app" className="loader">
        <ToastContainer />
        <NavBar user={user} showLoader={showLoader} />
        <div id="content">
          <Switch>
            <Route
              path="/workout-app"
              render={props => <WorkoutApp {...props} />}
            />
            )} />
            <Route
              path="/"
              exact
              render={props => <Landing showLoader={showLoader} {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
