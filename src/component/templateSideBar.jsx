import React, { Component } from "react";

class TemplateSideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <ul id="side-bar-menu">
          <li>Add New</li>
          <li>View Templates</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default TemplateSideBar;
