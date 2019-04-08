import React, { Component } from "react";

class Clock extends Component {
  state = {
    intervalId: "",
    time: 0
  };

  tick = () => {
    let time = new Date();
    time = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    this.setState({ time });
  };

  componentDidMount() {
    const intervalId = setInterval(this.tick, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { time } = this.state;
    return (
      <div id="clock">
        <p style={{ color: "white" }}>{time}</p>
      </div>
    );
  }
}

export default Clock;
