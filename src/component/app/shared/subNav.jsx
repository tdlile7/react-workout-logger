import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div id="sub-nav">
      <NavLink to="/workout-app/instructions" activeClassName="active">
        <button className="nav-btn">Get Started</button>
      </NavLink>
      <NavLink to="/workout-app/workouts">
        <button className="nav-btn">Workouts</button>
      </NavLink>
      <NavLink to="/workout-app/logs">
        <button className="nav-btn">Logs</button>
      </NavLink>
    </div>
  );
};

export default SubNav;
