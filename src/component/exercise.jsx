import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Exercise extends Component {
  render() {
    const { exercise, onDelete } = this.props;
    const { name, reps, sets } = exercise;
    return (
      <li id="exercise">
        <h4>{`${name}: ${reps} reps for ${sets} sets`}</h4>
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={() => onDelete(exercise)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </li>
    );
  }
}

export default Exercise;
