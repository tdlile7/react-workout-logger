import React, { Component } from "react";
import Modal from "../common/modal";

class ViewWorkouts extends Component {
  render() {
    const { workouts } = this.props;
    const haveSavedWorkouts = workouts.length > 0;
    const btnClasses = "btn btn-dark";

    return (
      <div id="workouts-container">
        {!haveSavedWorkouts && <h1>No workouts have been saved</h1>}
        {haveSavedWorkouts && <h1>Saved Workouts:</h1>}
        {workouts.map((workout, index) => {
          const target = workout.title.replace(" ", "");
          return (
            <Modal
              title={target}
              body={<h3>Hello</h3>}
              btnClasses={btnClasses}
              btnCover={workout.title}
            />
            // <div className="row">
            //   <h2>{workout.title}</h2>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default ViewWorkouts;
