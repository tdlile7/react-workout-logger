import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../../services/userService";
import auth from "../../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .min(2)
      .max(50)
      .label("Username"),
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(255)
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      this.props.showLoader();
      window.location = "/workout-app/instructions";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const title = this.props.title;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(title, "username", "Username")}
          {this.renderInput(title, "email", "Email")}
          {this.renderInput(title, "password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
