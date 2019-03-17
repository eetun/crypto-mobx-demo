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
    const priceChange = AppStore.priceChange || 0;
    const priceChangePercentage = AppStore.priceChangePercentage || 0;
    const priceClass = priceChange > 0 ? "increase" : "decrease";

    return (
      <div className="title">
        {title}{" "}
        <span className={priceClass}>
          {priceChange} € ({priceChangePercentage}%)
        </span>
      </div>
    );
  }
}
