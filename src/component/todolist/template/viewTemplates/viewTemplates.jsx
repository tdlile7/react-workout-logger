import React, { Component } from "react";

class ViewTemplates extends Component {
  render() {
    const { templates } = this.props;
    return (
      <div id="templates-container">
        {templates.length === 0 && <h1>No templates have been saved</h1>}
        {templates.map(workout => {
          return (
            <div className="row">
              <h2>{workout.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewTemplates;
