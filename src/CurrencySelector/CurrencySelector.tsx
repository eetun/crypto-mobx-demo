import React, { Component } from "react";
import { observer } from "mobx-react";
import classnames from "classnames";
import "./CurrencySelector.css";
import AppStore from "../App.store";

@observer
export default class CurrencySelector extends Component {
  setCurrency = currency => {
    AppStore.setCurrency(currency);
  };

  render() {
    const { currency } = AppStore;

    return (
      <div className="currencies">
        <div
          onClick={evt => this.setCurrency("BTC")}
          className={classnames("currency content-box", {
            active: currency === "BTC"
          })}
        >
          <div className="ticker">BTC</div>
          <div className="price">$ 3500</div>
        </div>
        <div
          onClick={evt => this.setCurrency("ETH")}
          className={classnames("currency content-box", {
            active: currency === "ETH"
          })}
        >
          <div className="ticker">ETH</div>
          <div className="price">$ 3500</div>
        </div>
      </div>
    );
  }
}
