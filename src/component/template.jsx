import React, { Component } from "react";
import TemplateForm from "./templateForm";
import TemplateSideBar from "./templateSideBar";
import "../assets/stylesheets/template.scss";

class Template extends Component {
  render() {
    return (
      <div id="template">
        <div id="side-bar">
          <TemplateSideBar />
        </div>
        <div id="template-form">
          <TemplateForm />
        </div>
      </div>
    );
  }
}

export default Template;
