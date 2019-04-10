import React, { Component } from "react";
import LogTable from "./logTable";

class ViewLog extends Component {
  render() {
    const { log } = this.props;
    const { records } = log;

    return (
      <React.Fragment>
        {records.map((exercise, i) => {
          const { name, data } = exercise;
          return (
            <div className="exercise-table">
              <h2>{`#${i + 1}: ${name}`}</h2>
              {<LogTable data={data} />}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ViewLog;
