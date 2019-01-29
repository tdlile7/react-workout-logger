import React, { Component } from "react";
import EditExerciseBtn from "./editExerciseBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";

class Exercise extends Component {
  render() {
    const { exercise, onDelete, index, length } = this.props;
    const { name, reps, sets } = exercise;

    return (
      <li id="exercise">
        <p>{`${name}: ${reps} reps for ${sets} sets`}</p>
        <div id="exercise-btn">
          <EditExerciseBtn title="example" body="Hello" />
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(exercise)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          {length > 1 && index !== 0 && (
            <button type="button" className="btn btn-warning btn-sm">
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </button>
          )}
          {length > 1 && index !== length - 1 && (
            <button type="button" className="btn btn-warning btn-sm">
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </button>
          )}
        </div>
      </li>
    );
  }
}

export default Exercise;
