import React, { Component } from "react";
import Exercise from "./exercise";
import AddExercise from "./addExercise";
import { Label } from "react-bootstrap";

class Day extends Component {
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
      <div className="day gridBox">
        <Label bsStyle="primary">
          <h2>Day</h2>
        </Label>
        <AddExercise
          onTodoSubmit={this.handleTodoSubmit}
          exercise={exercise}
          onInputChange={this.handleInputChange}
        />
        <div className="exercises">
          <ul>
            {todoItems.map((exercise, i) => {
              return (
                <Exercise
                  exercise={exercise}
                  onDelete={this.handleDelete}
                  key={i}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Day;
