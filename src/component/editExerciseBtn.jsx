import React, { Component } from "react";
// import EditExerciseForm from "./editExerciseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class EditExerciseBtn extends Component {
  render() {
    const { title } = this.props;
    const target = `#${title}`;
    return (
      <React.Fragment>
        <button
          button
          type="button"
          className="btn btn-dark btn-sm"
          data-toggle="modal"
          data-target={target}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <div
          className="modal fade"
          id={title}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{/* <EditExerciseForm /> */}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditExerciseBtn;
