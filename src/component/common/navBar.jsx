import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarComponent extends Component {
  render() {
    return (
      <nav class="navbar bg-inverse">
        <Link to="/">
          <h2>TodoApp</h2>
        </Link>
      </nav>
    );
  }
}

export default NavBarComponent;
