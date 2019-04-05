import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../common/logout";

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
          <div>
            <h3>{greetingsHeader}</h3>
            <Logout showLoader={showLoader} />
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
