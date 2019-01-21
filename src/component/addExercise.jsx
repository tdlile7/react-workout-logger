import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ExerciseForm from "./exerciseForm";

class AddExercise extends Component {
  state = {
    show: false
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    const { onTodoSubmit, onInputChange, exercise } = this.props;
    return (
      <div className="modal-container">
        <Button bsStyle="warning" onClick={() => this.setState({ show: true })}>
          Add Exercise
        </Button>

        <Modal
          show={show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Exercises</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExerciseForm
              onInputChange={onInputChange}
              onTodoSubmit={onTodoSubmit}
              exercise={exercise}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddExercise;
