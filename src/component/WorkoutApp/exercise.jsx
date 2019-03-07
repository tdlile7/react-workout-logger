import React, { Component } from "react";
import Modal from "../common/modal";
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
    const title = `Exercise${index + 1}`;
    return (
      <li id="exercise">
        <p>{`${name}: ${reps} reps for ${sets} sets`}</p>
        <div id="exercise-btn">
          <Modal
            title={title}
            body={
              <EditExercise
                name={name}
                reps={reps}
                sets={sets}
                index={index}
                modalTitle={title}
                onExerciseEdit={onExerciseEdit}
              />
            }
            btnClasses="btn btn-dark btn-sm"
            btnCover={<FontAwesomeIcon icon={faEdit} />}
          />
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(exercise)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          {length > 1 && index !== 0 && (
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => onShiftUp(exercise)}
            >
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </button>
          )}
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
