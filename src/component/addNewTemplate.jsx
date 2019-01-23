import React, { Component } from "react";
import TemplateForm from "./templateForm";
import CustomTemplate from "./customTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

class AddNewTemplate extends Component {
  render() {
    const {
      onTodoSubmit,
      onInputChange,
      onDelete,
      todoItems,
      exercise
    } = this.props;
    return (
      <React.Fragment>
        <TemplateForm
          onTodoSubmit={onTodoSubmit}
          onInputChange={onInputChange}
          exercise={exercise}
        />
        <div id="transfer-arrow">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        <CustomTemplate todoItems={todoItems} onDelete={onDelete} />
      </React.Fragment>
    );
  }
}

export default AddNewTemplate;
