import React, { Component } from "react";

class LogDeleteBtn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onLogDelete, log } = this.props;
    onLogDelete(log._id);
  };

  render() {
    const { log, modalId } = this.props;
    const dataToggle = "modal";
    const dataTarget = `#${modalId}`;
    const title = log.title;
    return (
      <React.Fragment>
        {title}
        <button
          onClick={this.handleSubmit}
          data-toggle={dataToggle}
          data-target={dataTarget}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default LogDeleteBtn;
