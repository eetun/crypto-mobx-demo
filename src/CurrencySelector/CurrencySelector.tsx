import React, { Component } from "react";
import "./CurrencySelector.css";

export default class CurrencySelector extends Component {
  render() {
    return (
      <div className="currencies">
        <div className="currency content-box active">
          <div className="ticker">BTC</div>
          <div className="price">$ 3500</div>
        </div>
        <div className="currency content-box">
          <div className="ticker">ETH</div>
          <div className="price">$ 3500</div>
        </div>
      </div>
    );
  }
}
