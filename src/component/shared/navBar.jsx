import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../../services/authService";
import Logout from "./logout";

class NavBarComponent extends Component {
  render() {
    const user = auth.getCurrentUser();
    let greetingsHeader = "";
    if (user) {
      greetingsHeader = `Greetings, ${user.username}`;
    }

    return (
      <nav class="navbar bg-inverse">
        <Link to="/workout-app/instructions">
          <h2>WELog</h2>
        </Link>
        {user && (
          <div>
            <h3>{greetingsHeader}</h3>
            <Logout />
          </div>
        )}
      </nav>
    );
  }
}

export default NavBarComponent;
