import React, { Component } from "react";

class ViewLog extends Component {
  render() {
    const { log } = this.props;
    const { title } = log;

    return (
      <div id="edit-workout-form">
        <li>{`${title}`}</li>
      </div>
    );
  }
}

export default ViewLog;
