import React, { Component } from "react";
import LoginForm from "./loginForm";
import Modal from "../common/modal";

class Login extends Component {
  render() {
    const title = "Login";
    return (
      <React.Fragment>
        <Modal
          title={title}
          body={<LoginForm title={title} />}
          btnCover="Login"
        />
      </React.Fragment>
    );
  }
}

export default Login;
