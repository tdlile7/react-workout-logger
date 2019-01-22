import React, { Component } from "react";
import ExerciseForm from "./exerciseForm";
import ExerciseList from "./exerciseList";

class TemplateForm extends Component {
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

  handleInputChange = e => {
    let exercise = { ...this.state.exercise };
    exercise[e.target.name] = e.target.name.value;
    this.setState({ exercise });
  };

  handleDelete = exercise => {
    let todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(exercise);
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  };

  componentDidUpdate() {
    if (this.state.todoItems.length > 1) console.log(this.state.todoItems);
  }

  render() {
    const { exercise, todoItems } = this.state;
    return (
      <React.Fragment>
        <h2>
          <span class="badge badge-secondary">Day</span>
        </h2>
        <ExerciseForm
          onTodoSubmit={this.handleTodoSubmit}
          onInputChange={this.handleInputChange}
          exercise={exercise}
        />
        <ExerciseList todoItems={todoItems} onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default TemplateForm;
