import React, { Component } from "react";

export default class TimeSelector extends Component {
  render() {
    return (
      <div className="time-controls">
        <span className="time-btn active">1H</span>{" "}
        <span className="time-btn">24H</span>{" "}
        <span className="time-btn">1W</span>{" "}
        <span className="time-btn">1M</span>{" "}
        <span className="time-btn">1Y</span>
      </div>
    );
  }
}
