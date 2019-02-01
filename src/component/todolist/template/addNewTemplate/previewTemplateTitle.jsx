import React from "react";
import EditTemplateTitle from "./editTemplateTitle";
import Modal from "../../../common/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const PreviewTemplateTitle = ({ templateTitle, onTitleChange }) => {
  return (
    <h2>
      {templateTitle}
      <Modal
        title="Edit_Title"
        body={
          <EditTemplateTitle
            modalTitle="Edit_Title"
            onTitleChange={onTitleChange}
          />
        }
        btnClasses="btn btn-dark"
        btnCover={<FontAwesomeIcon icon={faEdit} />}
      />
    </h2>
  );
};

export default PreviewTemplateTitle;
