import React from "react";

const Modal = ({
  modalId,
  modalTitle,
  modalBody,
  modalBtnTitle,
  modalBtnClasses = "btn btn-primary"
}) => {
  const modalTarget = `#${modalId}`;

  return (
    <React.Fragment>
      <button
        button
        type="button"
        className={modalBtnClasses}
        data-toggle="modal"
        data-target={modalTarget}
      >
        {modalBtnTitle}
      </button>
      <div
        className="modal fade"
        id={modalId}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalCenterTitle">
                {modalTitle}
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
            <div className="modal-body">{modalBody}</div>
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
