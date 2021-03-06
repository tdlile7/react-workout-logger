import React, { Component } from "react";
import LoginForm from "./loginForm";
import Modal from "../common/modal";

class Login extends Component {
  render() {
    const { showLoader } = this.props;
    const title = "Login";
    return (
      <React.Fragment>
        <Modal
          modalId={title}
          modalTitle={title}
          modalBody={<LoginForm title={title} showLoader={showLoader} />}
          modalBtnTitle="Login"
        />
      </React.Fragment>
    );
  }
}

export default Login;
