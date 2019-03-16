import { observable, action, autorun } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = 1;
  @observable currencyData: any[] = [];
  @observable isLoading = false;

  constructor() {
    autorun(() => this.fetchCurrencyData());
  }

  @action
  setCurrency = currency => {
    this.currency = currency;
  };

  @action
  setTimeInterval = timeInterval => {
    this.timeInterval = timeInterval;
  };

  fetchCurrencyData = async () => {
    console.log("Fetching graph data");

    this.isLoading = true;

    const currency = this.currency;
    const timeInterval = this.timeInterval;

    const apiRoot = process.env.REACT_APP_API_URL;
    const apiUrl = `${apiRoot}/histoday?fsym=${currency}&tsym=EUR&limit=${timeInterval}`;

    await fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        console.log("Got", response.Data);
        this.currencyData = response.Data;
        this.isLoading = false;
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
