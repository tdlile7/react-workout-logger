import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

class ViewWorkout extends Component {
  render() {
    const { workout } = this.props;
    const { exercises } = workout;

    return (
      <React.Fragment>
        <ul>
          {exercises.map((exercise, index) => {
            return (
              <li>
                {`${index + 1}. ${exercise.name} x ${exercise.sets} sets`}
                <div className="target">
                  <FontAwesomeIcon icon={faBullseye} />
                  {`${exercise.reps} reps`}
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default ViewWorkout;
