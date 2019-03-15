import React, { Component } from "react";
import RegisterForm from "./registerForm";
import Modal from "../common/modal";

class Register extends Component {
  render() {
    const { showLoader } = this.props;
    const title = "Register";

    return (
      <React.Fragment>
        <Modal
          modalId={title}
          modalTitle={title}
          modalBody={<RegisterForm title={title} showLoader={showLoader} />}
          modalBtnTitle="Register"
        />
      </React.Fragment>
    );
  }
}

export default Register;
