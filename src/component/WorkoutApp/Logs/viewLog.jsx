import React, { Component } from "react";
import LogTable from "./logTable";

class ViewLog extends Component {
  render() {
    const { log } = this.props;
    const { records } = log;

    return (
      <React.Fragment>
        {records.map(exercise => {
          const { name, data } = exercise;
          return (
            <div className="exercise-table">
              <h2>{name}</h2>
              {<LogTable data={data} />}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ViewLog;
