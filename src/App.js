import React, { Component } from "react";
import WorkoutApp from "./component/WorkoutApp/workoutApp";
import NavBar from "./component/shared/navBar";
import Landing from "./component/Landing/landing";
import { Switch, Route } from "react-router-dom";
import auth from "./services/authService";
import "./assets/stylesheets/app.scss";

class App extends Component {
  async componentDidMount() {
    await setTimeout(this.props.hideLoader, 2000);
  }

  render() {
    const { showLoader } = this.props;

    //Check if a user is currently logged in
    const user = auth.getCurrentUser();

    return (
      <div id="app" className="loader">
        <NavBar user={user} showLoader={showLoader} />
        <div id="content">
          <Switch>
            <Route path="/workout-app" component={WorkoutApp} />
            )} />
            <Route
              path="/"
              exact
              render={props => (
                <Landing showLoader={showLoader} {...this.props} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
