import React from "react";

const Modal = ({
  title,
  body,
  btnClasses = "btn btn-primary",
  btnTitle = null
}) => {
  const target = `#${title}`;

  let btn = btnTitle;
  if (!btn) btn = title;

  return (
    <React.Fragment>
      <button
        button
        type="button"
        className={btnClasses}
        data-toggle="modal"
        data-target={target}
      >
        {btn}
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
                {title}
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
