import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Register extends Component {
  state = {
    show: false
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="modal-container">
        <Button bsStyle="primary" onClick={() => this.setState({ show: true })}>
          Register
        </Button>

        <Modal
          show={show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Register;
