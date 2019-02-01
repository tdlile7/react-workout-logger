import React, { Component } from "react";
import ContentNav from "../../common/contentNav";
import AddNewTemplate from "./addNewTemplate/addNewTemplate";
import ViewTemplates from "./viewTemplates/viewTemplates";
import { Route } from "react-router-dom";

class Template extends Component {
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

  componentDidUpdate() {
    console.log(this.state.templates);
  }

  render() {
    const { todoItems, templateTitle, templates } = this.state;
    return (
      <div id="template">
        <Route
          path="/todolist/template"
          exact
          render={props => (
            <ContentNav path="template" component={"Templates"} {...props} />
          )}
        />
        <Route
          path="/todolist/template/new"
          render={props => (
            <AddNewTemplate
              todoItems={todoItems}
              templateTitle={templateTitle}
              onTodoSubmit={this.handleTodoSubmit}
              onTodoEdit={this.handleTodoEdit}
              onTemplateSubmit={this.handleTemplateSubmit}
              onTitleChange={this.handleTitleChange}
              onShiftUp={this.handleShiftUp}
              onShiftDown={this.handleShiftDown}
              onDelete={this.handleDelete}
              {...props}
            />
          )}
        />
        <Route
          path="/todolist/template/view"
          render={props => <ViewTemplates templates={templates} {...props} />}
        />
      </div>
    );
  }
}

export default Template;
