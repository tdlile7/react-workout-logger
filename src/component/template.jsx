import React, { Component } from "react";
import TemplateNav from "./templateNav";
import AddNewTemplate from "./addNewTemplate";
import { Route } from "react-router-dom";

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
        <Route path="/todolist/template" exact component={TemplateNav} />
        <Route
          path="/todolist/template/new"
          render={props => (
            <AddNewTemplate
              exercise={exercise}
              todoItems={todoItems}
              onTodoSubmit={this.handleTodoSubmit}
              onInputChange={this.handleInputChange}
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
