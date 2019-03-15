import React, { Component } from "react";
import { observer } from "mobx-react";
import CurrencySelector from "./CurrencySelector/CurrencySelector";
import TimeSelector from "./TimeSelector/TimeSelector";
import TitleBar from "./TitleBar/TitleBar";
import Chart from "./Chart/Chart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencySelector />

        <div className="chart-container content-box">
          <div className="statbar">
            <TitleBar />

            <TimeSelector />
          </div>
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
