import React, { Component } from "react";
import RegisterForm from "./registerForm";
import Modal from "../common/modal";

class Register extends Component {
  render() {
    const title = "Register";
    return (
      <React.Fragment>
        <Modal
          modalId={title}
          modalTitle={title}
          modalBody={<RegisterForm title={title} />}
          modalBtnTitle="Register"
        />
      </React.Fragment>
    );
  }
}

export default Register;
