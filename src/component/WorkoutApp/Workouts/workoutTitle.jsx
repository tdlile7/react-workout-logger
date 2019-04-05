import React from "react";
import EditWorkoutTitle from "./editWorkoutTitle";
import Modal from "../../common/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const WorkoutTitle = ({ workoutTitle, onTitleChange }) => {
  return (
    <h2 id="workout-title">
      {workoutTitle}
      <Modal
        modalId="WorkoutTitle"
        modalTitle="Edit Title"
        modalBody={
          <EditWorkoutTitle
            modalTarget="WorkoutTitle"
            onTitleChange={onTitleChange}
          />
        }
        modalBtnTitle={<FontAwesomeIcon icon={faEdit} />}
        modalBtnClasses="btn btn-dark"
      />
    </h2>
  );
};

export default WorkoutTitle;
