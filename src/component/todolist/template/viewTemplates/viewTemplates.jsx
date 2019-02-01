import React, { Component } from "react";

class ViewTemplates extends Component {
  componentDidMount() {
    console.log("Templates   ", this.props.templates);
  }

  render() {
    const { templates } = this.props;
    return (
      <div>
        <h1>Viewing all the templates!</h1>
        {templates.map(workout => {
          return <p>{workout.title}</p>;
        })}
      </div>
    );
  }
}

export default ViewTemplates;
