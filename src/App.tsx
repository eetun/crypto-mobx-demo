import React, { Component } from "react";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import TimeSelector from "./TimeSelector/TimeSelector";
import Chart from "./Chart/Chart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencySelector />

        <div className="chart-container content-box">
          <div className="statbar">
            <div className="title">Bitcoin (BTC)</div>

            <TimeSelector />
          </div>
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
