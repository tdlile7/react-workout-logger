import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

class Exercise extends Component {
  render() {
    const { exercise, onDelete } = this.props;
    const { name, reps, sets } = exercise;
    return (
      <li
        style={{ listStyleType: "none", background: "white", padding: "10px" }}
      >
        <h3>{`${name}: ${reps} reps for ${sets} sets`}</h3>
        <Button
          bsSize="large"
          bsStyle="danger"
          onClick={() => onDelete(exercise)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </li>
    );
  }
}

export default Exercise;
