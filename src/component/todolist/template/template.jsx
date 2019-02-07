import React, { Component } from "react";
import ContentNav from "../../common/contentNav";
import AddNewTemplate from "./addNewTemplate/addNewTemplate";
import ViewTemplates from "./viewTemplates/viewTemplates";
import { Route } from "react-router-dom";

class Template extends Component {
  render() {
    const {
      todoItems,
      templateTitle,
      templates,
      onTodoSubmit,
      onTodoEdit,
      onTemplateSubmit,
      onDelete,
      onShiftUp,
      onShiftDown,
      onTitleChange
    } = this.props;
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
              onTodoSubmit={onTodoSubmit}
              onTodoEdit={onTodoEdit}
              onTemplateSubmit={onTemplateSubmit}
              onTitleChange={onTitleChange}
              onShiftUp={onShiftUp}
              onShiftDown={onShiftDown}
              onDelete={onDelete}
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
