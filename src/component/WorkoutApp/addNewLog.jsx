import React, { Component } from "react";
import Modal from "../common/modal";
import LogForm from "./logForm";

class AddNewLog extends Component {
  render() {
    const { workouts } = this.props;
    return (
      <div className="log-group">
        {workouts.map(workout => {
          const modalId = "Log" + workout.title.replace(" ", "");
          return (
            <Modal
              modalId={modalId}
              modalTitle={workout.title}
              modalBody={<LogForm />}
              modalBtnTitle={workout.title}
            />
          );
        })}
      </div>
    );
  }
}

export default AddNewLog;
