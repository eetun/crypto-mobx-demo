import React, { Component } from "react";
import { observer } from "mobx-react";
import classnames from "classnames";
import AppStore from "../App.store";

@observer
export default class TimeSelector extends Component {
  setTimeInterval = timeInterval => {
    AppStore.setTimeInterval(timeInterval);
  };

  render() {
    const { timeInterval } = AppStore;

    return (
      <div className="time-controls">
        <span
          className={classnames("time-btn", {
            active: timeInterval === 1
          })}
          onClick={evt => this.setTimeInterval(1)}
        >
          24H
        </span>
        <span
          className={classnames("time-btn", {
            active: timeInterval === 7
          })}
          onClick={evt => this.setTimeInterval(7)}
        >
          1W
        </span>
        <span
          className={classnames("time-btn", {
            active: timeInterval === 30
          })}
          onClick={evt => this.setTimeInterval(30)}
        >
          1M
        </span>
        <span
          className={classnames("time-btn", {
            active: timeInterval === 365
          })}
          onClick={evt => this.setTimeInterval(365)}
        >
          1Y
        </span>
      </div>
    );
  }
}
