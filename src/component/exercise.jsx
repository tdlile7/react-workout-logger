import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class Exercise extends Component {
  render() {
    const { exercise, onDelete } = this.props;
    const { name, reps, sets } = exercise;
    return (
      <li id="exercise">
        <p>{`${name}: ${reps} reps for ${sets} sets`}</p>
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
      </li>
    );
  }
}

export default Exercise;
