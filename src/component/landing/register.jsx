import React, { Component } from "react";
import RegisterForm from "./registerForm";
import Modal from "../common/modal";

class Register extends Component {
  render() {
    const title = "Register";
    return (
      <React.Fragment>
        <Modal
          title={title}
          body={<RegisterForm title={title} />}
          btnCover="Register"
        />
      </React.Fragment>
    );
  }
}

export default Register;
