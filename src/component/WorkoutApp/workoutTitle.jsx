import React from "react";
import EditWorkoutTitle from "./editWorkoutTitle";
import Modal from "../common/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const WorkoutTitle = ({ workoutTitle, onTitleChange }) => {
  return (
    <h2>
      {workoutTitle}
      <Modal
        title="Edit_Title"
        body={
          <EditWorkoutTitle
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

export default WorkoutTitle;
