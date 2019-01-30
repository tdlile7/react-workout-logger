import React, { Component } from "react";
import Modal from "./common/modal";
import ExerciseForm from "./exerciseForm";
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
      onShiftUp,
      onShiftDown,
      onDelete,
      index,
      length
    } = this.props;
    const { name, reps, sets } = exercise;

    return (
      <li id="exercise">
        <p>{`${name}: ${reps} reps for ${sets} sets`}</p>
        <div id="exercise-btn">
          <Modal
            title="Example"
            body={<ExerciseForm />}
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
