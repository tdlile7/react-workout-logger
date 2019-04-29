import React, { Component } from "react";
import ViewLog from "./viewLog";
import LogDeleteBtn from "./logDeleteBtn";
import Modal from "../../common/modal";

class ViewLogs extends Component {
  render() {
    const { logs, onLogDelete } = this.props;
    const haveSavedLogs = logs.length > 0;
    const modalBtnClasses = "btn btn-dark";

    return (
      <div id="logs-container">
        {!haveSavedLogs && <h1>No logs have been saved</h1>}
        {haveSavedLogs && <h1>Saved Logs:</h1>}
        <div id="saved-logs">
          {logs.map((log, index) => {
            const modalId = log.title.replace(" ", "") + index;
            return (
              <Modal
                modalId={modalId}
                modalTitle={
                  <LogDeleteBtn
                    log={log}
                    onLogDelete={onLogDelete}
                    modalId={modalId}
                  />
                }
                modalBody={<ViewLog log={log} />}
                modalBtnTitle={log.title}
                modalBtnClasses={modalBtnClasses}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewLogs;
