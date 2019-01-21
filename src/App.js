import React, { Component } from "react";
import TodoList from "./component/todoList";
import Landing from "./component/landing";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/todolist" component={TodoList} />
        <Route path="/" exact component={Landing} />
      </Switch>
    );
  }
}

export default App;
