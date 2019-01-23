import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TemplateNav extends Component {
  render() {
    return (
      <div id="template-nav">
        <NavLink to="/todolist/template/new">
          <button className="template-nav-btn">Add New</button>
        </NavLink>
        <NavLink to="/todolist/template/view">
          <button className="template-nav-btn">View Templates</button>
        </NavLink>
      </div>
    );
  }
}

export default TemplateNav;
