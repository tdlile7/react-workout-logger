import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBarComponent extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <h2>TodoApp</h2>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavBarComponent;
