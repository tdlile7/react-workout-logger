import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";

class Exercise extends Component {
  render() {
    const { exercise, onDelete, index, length } = this.props;
    const { Name, Reps, Sets } = exercise;

    return (
      <li id="exercise">
        <p>{`${Name}: ${Reps} reps for ${Sets} sets`}</p>
        <div id="exercise-btn">
          <button type="button" className="btn btn-dark btn-sm">
            <FontAwesomeIcon icon={faEdit} />
          </button>
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
