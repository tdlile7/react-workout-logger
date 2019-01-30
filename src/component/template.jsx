import React, { Component } from "react";
import TemplateNav from "./templateNav";
import AddNewTemplate from "./addNewTemplate";
import { Route } from "react-router-dom";

class Template extends Component {
  state = {
    todoItems: []
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
    console.log(this.state.todoItems);
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
