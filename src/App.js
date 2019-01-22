import React, { Component } from "react";
import TodoList from "./component/todoList";
import NavBar from "./component/common/navBar";
import Landing from "./component/landing";
import { Switch, Route } from "react-router-dom";
import "./assets/stylesheets/app.scss";

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <div id="content">
          <Switch>
            <Route path="/todolist" component={TodoList} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
