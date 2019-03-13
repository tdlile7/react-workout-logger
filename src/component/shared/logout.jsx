import React, { Component } from "react";
import auth from "../../services/authService";

class Logout extends Component {
  logout(e) {
    e.preventDefault();
    auth.logout();
    window.location = "/";
  }

  render() {
    return <button onClick={this.logout}>Logout</button>;
  }
}

export default Logout;
