import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  state = {
    // time:new Date().toLocaleTimeString(),
    time: new Date(),
  };

  intervalId = null;
  componentDidMount() {
    this.intervalId = setInterval(
      () =>
        this.setState({
          // time: new Date().toLocaleTimeString(),
          time: new Date(),
        }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      // <div className="Clock__face">{this.state.time}</div>
      <div className="Clock__face">{this.state.time.toLocaleTimeString()}</div>
    );
  }
}
