import React, { Component } from "react";
import TemplateNav from "./templateNav";
import AddNewTemplate from "./addNewTemplate";
import { Route } from "react-router-dom";

class Template extends Component {
  state = {
    todoItems: [],
    templates: []
  };

  handleTodoSubmit = exercise => {
    if (this.state.todoItems.length === 0)
      this.setState({ todoItems: [exercise] });
    else {
      const todoItems = [...this.state.todoItems];
      todoItems.push(exercise);
      this.setState({ todoItems });
    }
  };

  handleTemplateSubmit = template => {
    if (this.state.templates.length === 0)
      this.setState({ templates: [template], todoItems: [] });
    else {
      const templates = [...this.state.templates];
      templates.push(template);
      this.setState({ templates, todoItems: [] });
    }
  };

  handleDelete = exercise => {
    let todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(exercise);
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  };

  handleShiftUp = exercise => {
    let todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(exercise);
    const temp = todoItems[index - 1];
    todoItems[index - 1] = exercise;
    todoItems[index] = temp;
    this.setState({ todoItems });
  };

  handleShiftDown = exercise => {
    let todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(exercise);
    const temp = todoItems[index + 1];
    todoItems[index + 1] = exercise;
    todoItems[index] = temp;
    this.setState({ todoItems });
  };

  componentDidUpdate() {
    console.log("TodoItems    ", this.state.todoItems);
    console.log("Templates    ", this.state.templates);
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div id="template">
        <Route path="/todolist/template" exact component={TemplateNav} />
        <Route
          path="/todolist/template/new"
          render={props => (
            <AddNewTemplate
              todoItems={todoItems}
              onTodoSubmit={this.handleTodoSubmit}
              onTemplateSubmit={this.handleTemplateSubmit}
              onShiftUp={this.handleShiftUp}
              onShiftDown={this.handleShiftDown}
              onDelete={this.handleDelete}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Template;
