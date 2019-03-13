import React, { Component } from "react";
import { Link } from "react-router-dom";
import { landingUrl } from "../../config.json";
import Logout from "./logout";

class NavBarComponent extends Component {
  render() {
    const notLanding = window.location.href !== landingUrl;
    console.log("Current location:", notLanding);
    return (
      <nav class="navbar bg-inverse">
        <Link to="/">
          <h2>WELog</h2>
        </Link>
        {notLanding && <Logout />}
      </nav>
    );
  }
}

export default NavBarComponent;
