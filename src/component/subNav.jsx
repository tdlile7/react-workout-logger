import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div id="sub-nav">
      <Button bsSize="medium" bsStyle="primary">
        <NavLink to="/todolist/intro" style={{ color: "white" }}>
          Get Started
        </NavLink>
      </Button>
      <Button bsSize="medium" bsStyle="primary">
        <NavLink to="/todolist/templates" style={{ color: "white" }}>
          Templates
        </NavLink>
      </Button>
      <Button bsSize="medium" bsStyle="primary">
        <NavLink to="/todolist/logs" style={{ color: "white" }}>
          Log
        </NavLink>
      </Button>
    </div>
  );
};

export default SubNav;
