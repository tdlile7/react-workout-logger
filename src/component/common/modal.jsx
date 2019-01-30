import React from "react";

const Modal = ({ title, body, btnClasses = "btn btn-primary", btnCover }) => {
  const target = `#${title}`;

  return (
    <React.Fragment>
      <button
        button
        type="button"
        className={btnClasses}
        data-toggle="modal"
        data-target={target}
      >
        {btnCover}
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
              <h2 className="modal-title" id="exampleModalCenterTitle">
                {title}
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{body}</div>
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
};

export default Modal;
