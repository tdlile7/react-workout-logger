import React, { Component } from "react";
import RegisterForm from "./registerForm";
import Modal from "../common/modal";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal title="Register" body={<RegisterForm />} btnCover="Register" />
      </React.Fragment>
    );
  }
}

export default Register;
