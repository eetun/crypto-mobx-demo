import React, { Component } from "react";
import { observer } from "mobx-react";
import { Scatter, Line } from "react-chartjs-2";
import AppStore from "../App.store";

@observer
export default class Chart extends Component {
  render() {
    const { currencyData, isLoading } = AppStore;

    if (isLoading) {
      return <b>Loading</b>;
    }

    if (!currencyData) {
      return <b>Null</b>;
    }

    const graphDataSet = currencyData.map(data => {
      return data.high;
    });

    const labels = currencyData.map(data => {
      return data.time;
    });

    const data = {
      labels: labels,
      datasets: [
        {
          data: graphDataSet,
          showLine: true,
          tension: 0,
          backgroundColor: "#ACCDEF",
          borderColor: "#3579BF",
          borderWidth: 2
        }
      ]
    };

    console.log(graphDataSet);

    const options = {
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      elements: {
        point: {
          radius: 0
        }
      },
      legend: {
        display: false
      },
      title: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              callback: value => {
                const date = new Date(value * 1000);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const hours = date.getHours();
                const minutes = date.getMinutes();

                const dateString = `${day}.${month}.${year}`;
                const timeString = `${hours}:00`;

                return (
                  dateString +
                  (AppStore.timeUnit === "hour" ? " " + timeString : "")
                );
              },
              stepSize: 3.6e6
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      layout: {
        padding: {
          top: 15,
          bottom: 15
        }
      }
    };

    return (
      <div className="chart" style={{ background: "#F4F7FA", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    );
  }
}
