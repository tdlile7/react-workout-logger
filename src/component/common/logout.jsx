import React, { Component } from "react";
import auth from "../../services/authService";

class Logout extends Component {
  handleClick = e => {
    e.preventDefault();
    this.logout();
  };

  logout() {
    auth.logout();
    this.props.showLoader();
    window.location = "/";
  }

  render() {
    return <button onClick={this.handleClick}>Logout</button>;
  }
}

export default Logout;
