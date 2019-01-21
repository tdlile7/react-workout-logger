import React, { Component } from "react";
import NavBar from "./navBar";
import Log from "./log";
import Template from "./template";
// import Day from "./day";
import { Nav } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "../assets/stylesheets/todolist.css";

class TodoList extends Component {
  handleSelect = selectedKey => {
    alert(`selected ${selectedKey}`);
  };

  render() {
    return (
      <div id="todolist">
        <NavBar />
        <div className="content">
          <div className="todo-container">
            <Nav bsStyle="pills" onSelect={this.handleSelect} id="btn-nav">
              <NavLink to="/templates">Templates</NavLink>
              <NavLink to="/logs">Log</NavLink>
            </Nav>
            <div className="grid">
              <div className="background-image" />
              <Route path="/logs" component={Log} />
              <Route path="/templates" component={Template} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
