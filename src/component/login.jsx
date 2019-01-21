import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
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
          Login
        </Button>

        <Modal
          show={show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Link to="/todolist">
              <Button bsStyle="primary" bsSize="large">
                Let's Get Started!
              </Button>
            </Link>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;
