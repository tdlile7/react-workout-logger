import React, { Component } from "react";

class AddNewLog extends Component {
  render() {
    const { workouts } = this.props;
    return (
      <React.Fragment>
        <div id="log-filter">
          <ul className="list-group">
            {workouts.map(workout => {
              return <li class="list-group-item">{workout.title}</li>;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewLog;
