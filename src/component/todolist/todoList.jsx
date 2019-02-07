import React, { Component } from "react";
import Logger from "./logger/logger";
import Template from "./template/template";
import SubNav from "./subNav";
import Intro from "./intro/intro";
import { Route } from "react-router-dom";

class TodoList extends Component {
  state = {
    todoItems: [],
    templates: [],
    templateTitle: "Template Name"
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

  handleTodoEdit = (exercise, index) => {
    const todoItems = [...this.state.todoItems];
    const id = todoItems[index].id;
    todoItems[index] = { id, ...exercise };
    this.setState({ todoItems });
  };

  handleTemplateSubmit = template => {
    const title = this.state.templateTitle;
    const newTemplate = { template, title };
    if (this.state.templates.length === 0)
      this.setState({ templates: [newTemplate] });
    else {
      const templates = [...this.state.templates];
      templates.push(newTemplate);
      this.setState({ templates });
    }
    this.setState({ todoItems: [], templateTitle: "Template Name" });
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

  handleTitleChange = newTitle => {
    this.setState({ templateTitle: newTitle });
  };
  render() {
    const { todoItems, templates, templateTitle } = this.state;

    return (
      <React.Fragment>
        <SubNav />
        <div id="section">
          <div id="section-background" />
          <Route path="/todolist/intro" component={Intro} />
          <Route
            path="/todolist/logger"
            render={props => <Logger templates={templates} {...props} />}
          />
          <Route
            path="/todolist/template"
            render={props => (
              <Template
                todoItems={todoItems}
                templates={templates}
                templateTitle={templateTitle}
                onTodoSubmit={this.handleTodoSubmit}
                onTodoEdit={this.handleTodoEdit}
                onTemplateSubmit={this.handleTemplateSubmit}
                onDelete={this.onDelete}
                onShiftUp={this.handleShiftUp}
                onShiftDown={this.handleShiftDown}
                onTitleChange={this.handleTitleChange}
                {...props}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
