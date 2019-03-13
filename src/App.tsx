import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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

        <div className="chart-container content-box">
          <div className="statbar">
            <div className="title">Bitcoin (BTC)</div>

            <div className="time-controls">
              <span className="time-btn active">1H</span>{" "}
              <span className="time-btn">24H</span>{" "}
              <span className="time-btn">1W</span>{" "}
              <span className="time-btn">1M</span>{" "}
              <span className="time-btn">1Y</span>
            </div>
          </div>

          <div
            className="chart"
            style={{ background: "#F4F7FA", width: "100%", height: 500 }}
          >
            (chart)
          </div>
        </div>
      </div>
    );
  }
}

export default App;
