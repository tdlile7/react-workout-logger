import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/stylesheets/sub-nav.scss";

const SubNav = () => {
  return (
    <div id="sub-nav">
      <NavLink to="/todolist/intro">
        <button className="nav-btn">Get Started</button>
      </NavLink>
      <NavLink to="/todolist/templates">
        <button className="nav-btn">Template</button>
      </NavLink>
      <NavLink to="/todolist/logs">
        <button className="nav-btn">Logs</button>
      </NavLink>
    </div>
  );
};

export default SubNav;
