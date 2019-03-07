import React, { Component } from "react";
import Modal from "../common/modal";

import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    let body = (
      <Link to="/workout-app">
        <button
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#Login"
        >
          Let's Get Started!
        </button>
      </Link>
    );

    return (
      <React.Fragment>
        <Modal title="Login" body={body} btnCover="Login" />
      </React.Fragment>
    );
  }
}

export default Login;
