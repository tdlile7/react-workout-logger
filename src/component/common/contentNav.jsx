import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ContentNav extends Component {
  render() {
    const { path, component } = this.props;
    return (
      <div id="template-nav">
        <NavLink to={`/todolist/${path}/new`}>
          <button className="template-nav-btn">Add New</button>
        </NavLink>
        <NavLink to={`/todolist/${path}/view`}>
          <button className="template-nav-btn">View {component}</button>
        </NavLink>
      </div>
    );
  }
}

export default ContentNav;
