import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
          type="button"
          className="btn btn-danger btn-md"
          onClick={this.handleSubmit}
          data-toggle={dataToggle}
          data-target={dataTarget}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </React.Fragment>
    );
  }
}

export default LogDeleteBtn;
