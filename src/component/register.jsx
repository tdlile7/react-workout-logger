import React, { Component } from "react";
import Modal from "./common/modal";

class Register extends Component {
  render() {
    let body = (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        sequi aliquam. Aperiam quasi doloribus modi accusamus mollitia quidem
        eaque, minus distinctio cupiditate repellendus obcaecati illum soluta,
        illo iure laborum nemo.
      </p>
    );
    return (
      <React.Fragment>
        <Modal title="Register" body={body} btnCover="Register" />
      </React.Fragment>
    );
  }
}

export default Register;
