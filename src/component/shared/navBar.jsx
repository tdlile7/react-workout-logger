import React, { Component } from "react";
import { Link } from "react-router-dom";
import { landingUrl } from "../../config.json";
import Logout from "./logout";

class NavBarComponent extends Component {
  render() {
    const notLanding = window.location.href !== landingUrl;

    return (
      <nav class="navbar bg-inverse">
        <Link to="/workout-app/instructions">
          <h2>WELog</h2>
        </Link>
        {notLanding && <Logout />}
      </nav>
    );
  }
}

export default NavBarComponent;
