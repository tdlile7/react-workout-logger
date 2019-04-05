import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ContentNav extends Component {
  render() {
    const { path, component } = this.props;
    return (
      <div id="content-nav">
        <NavLink to={`/workout-app/${path}/new`}>
          <button className="content-nav-btn">Add New</button>
        </NavLink>
        <NavLink to={`/workout-app/${path}/all`}>
          <button className="content-nav-btn">View {component}</button>
        </NavLink>
      </div>
    );
  }
}

export default ContentNav;
