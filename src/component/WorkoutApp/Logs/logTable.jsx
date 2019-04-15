import React, { Component } from "react";
import Table from "../../common/table";
import sort from "../../../util/objectSort";

class LogTable extends Component {
  state = {
    sortColumn: { path: "set", order: "asc" }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn } = this.state;
    const { path, order } = sortColumn;
    const { data } = this.props;
    const sortedData = sort(data, path, order);
    console.log("data:", sortedData);

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
        data={sortedData}
      />
    );
  }
}

export default LogTable;
