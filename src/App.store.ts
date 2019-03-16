import { observable, action, autorun } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = 1;
  @observable graphData = null;

  constructor() {
    autorun(() => this.fetchGraphData());
  }

  @action
  setCurrency = currency => {
    this.currency = currency;
  };

  @action
  setTimeInterval = timeInterval => {
    this.timeInterval = timeInterval;
  };

  fetchGraphData = async () => {
    console.log("Fetching graph data");

    const currency = this.currency;
    const timeInterval = this.timeInterval;

    const apiRoot = process.env.REACT_APP_API_URL;
    const apiUrl = `${apiRoot}/histoday?fsym=${currency}&tsym=EUR&limit=${timeInterval}`;

    await fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        this.graphData = response.Data;
      });
  };

  getCurrencyName = () => {
    switch (this.currency) {
      case "BTC":
        return "BitCoin";
      case "ETH":
        return "Ethereum";
      default:
        return null;
    }
  };
}

export default new AppStore();
