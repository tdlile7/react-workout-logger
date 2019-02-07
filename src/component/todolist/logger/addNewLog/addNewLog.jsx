import React, { Component } from "react";

class AddNewLog extends Component {
  render() {
    const { templates } = this.props;
    return (
      <React.Fragment>
        <div id="log-filter">
          <ul className="list-group">
            {templates.map(template => {
              return <li class="list-group-item">{template.title}</li>;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewLog;
