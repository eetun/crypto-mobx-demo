import React, { Component } from "react";
import { observer } from "mobx-react";
import classnames from "classnames";
import AppStore from "../App.store";

@observer
export default class TitleBar extends Component {
  getCurrencyName = () => {
    const fullName = AppStore.getCurrencyName();
    const ticker = AppStore.currency;

    return `${fullName} (${ticker})`;
  };

  render() {
    const title = this.getCurrencyName();
    return <div className="title">{title}</div>;
  }
}
