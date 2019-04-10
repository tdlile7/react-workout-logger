import React, { Component } from "react";
import Table from "../../common/table";

class LogTable extends Component {
  state = {
    sortColumn: { path: "set", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn } = this.state;
    const { data } = this.props;

    const columns = [
      { path: "set", label: "Set" },
      { path: "reps", label: "Reps" },
      { path: "weight", label: "Weight" }
    ];

    return (
      <Table
        columns={columns}
        sortColumn={sortColumn}
        onSort={this.handleSort}
        data={data}
      />
    );
  }
}

export default LogTable;
