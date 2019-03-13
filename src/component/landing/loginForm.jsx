import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      const { state } = window.location;
      window.location = state
        ? state.from.pathname
        : "/workout-app/instructions";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/workout-app" />;
    const title = this.props.title;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(title, "email", "Email")}
          {this.renderInput(title, "password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
