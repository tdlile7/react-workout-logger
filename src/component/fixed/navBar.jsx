import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../common/logout";
import Clock from "../common/clock";

class NavBar extends Component {
  render() {
    const { user, showLoader } = this.props;
    let greetingsHeader = "";
    if (user) {
      greetingsHeader = `Greetings, ${user.username}`;
    }

    return (
      <nav class="navbar bg-inverse">
        <Link to={!user ? "/" : "/workout-app/instructions"}>
          <h2>WELog</h2>
        </Link>
        {user && (
          <div id="nav-info">
            <h3>{greetingsHeader}</h3>
            <Clock />
            <Logout showLoader={showLoader} />
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
