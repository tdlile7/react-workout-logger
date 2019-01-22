import React, { Component } from "react";
import TemplateForm from "./templateForm";
import TemplateSideBar from "./templateSideBar";
import CustomTemplate from "./customTemplate";

class Template extends Component {
  state = {
    todoItems: [],
    exercise: {}
  };

  handleTodoSubmit = e => {
    e.preventDefault();
    const keys = Object.keys(this.state.exercise);
    let exercise = {};
    keys.map(key => (exercise[key] = e.target[key].value));
    if (this.state.todoItems.length === 0)
      this.setState({ todoItems: [exercise] });
    else {
      let todoItems = [...this.state.todoItems];
      todoItems.push(exercise);
      this.setState({ todoItems });
    }
  };

  handleDelete = exercise => {
    let todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(exercise);
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  };

  handleInputChange = e => {
    let exercise = { ...this.state.exercise };
    exercise[e.target.name] = e.target.name.value;
    this.setState({ exercise });
  };

  render() {
    const { todoItems, exercise } = this.state;
    return (
      <div id="template">
        <TemplateSideBar />
        <TemplateForm
          onTodoSubmit={this.handleTodoSubmit}
          onInputChange={this.handleInputChange}
          exercise={exercise}
        />
        <CustomTemplate todoItems={todoItems} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Template;
