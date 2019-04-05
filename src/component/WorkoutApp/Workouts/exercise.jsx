import React, { Component } from "react";
import Modal from "../../common/modal";
import EditExercise from "./editExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

class Exercise extends Component {
  render() {
    const {
      exercise,
      onExerciseEdit,
      onShiftUp,
      onShiftDown,
      onDelete,
      index,
      length
    } = this.props;
    const { name, reps, sets } = exercise;
    const modalId = name.replace(" ", "") + index;

    return (
      <li id="exercise">
        <p>{`${name}: ${reps} reps for ${sets} sets`}</p>

        {/* Edit Exercise Button */}
        <div id="exercise-btn">
          <Modal
            modalId={modalId}
            modalTitle={name}
            modalBody={
              <EditExercise
                name={name}
                reps={reps}
                sets={sets}
                index={index}
                modalTarget={modalId}
                onExerciseEdit={onExerciseEdit}
              />
            }
            modalBtnClasses="btn btn-dark btn-sm"
            modalBtnTitle={<FontAwesomeIcon icon={faEdit} />}
          />

          {/* Delete Exercise Button */}
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(exercise)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>

          {/* If more than one exercise listed, allows exercise to be shift up one on the list */}
          {length > 1 && index !== 0 && (
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => onShiftUp(exercise)}
            >
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </button>
          )}

          {/* If more than one exercise listed, allows exercise to be shift down one on the list */}
          {length > 1 && index !== length - 1 && (
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => onShiftDown(exercise)}
            >
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </button>
          )}
        </div>
      </li>
    );
  }
}

export default Exercise;
