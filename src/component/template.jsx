import React, { Component } from "react";
import TemplateNav from "./templateNav";
import AddNewTemplate from "./addNewTemplate";
import { Route } from "react-router-dom";

class Template extends Component {
  state = {
    todoItems: [],
    exercise: {}
  };

  handleTodoSubmit = exercise => {
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

  // componentDidUpdate() {
  //   console.log(this.state.todoItems);
  // }

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
