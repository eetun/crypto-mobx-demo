import { observable, action, autorun, computed } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = 1;
  @observable timeUnit = "hour";
  @observable currencyData: any[] = [];
  @observable isLoading = false;

  @observable currentPrice = {
    BTC: 0,
    ETH: 0
  };

  constructor() {
    autorun(() => this.fetchCurrencyData());

    this.fetchCurrentPrice();
  }

  @action
  setCurrency = currency => {
    this.currency = currency;
  };

  @action
  setTimeInterval = timeInterval => {
    this.timeInterval = timeInterval;
    this.timeUnit = timeInterval === 1 ? "hour" : "day";
  };

  @computed
  get priceChange() {
    if (this.isLoading) {
      return null;
    }
    const openingPrice = this.currencyData[0].high;
    const closingPrice = this.currencyData[this.currencyData.length - 1].high;

    return (closingPrice - openingPrice).toFixed(2);
  }

  @computed
  get priceChangePercentage() {
    if (this.isLoading) {
      return null;
    }
    const openingPrice = this.currencyData[0].high;
    const closingPrice = this.currencyData[this.currencyData.length - 1].high;

    return (((closingPrice - openingPrice) / openingPrice) * 100).toFixed(2);
  }

  fetchCurrencyData = async () => {
    console.log("Fetching graph data");

    this.isLoading = true;

    const currency = this.currency;
    const timeUnit = this.timeUnit;
    const timeInterval =
      timeUnit === "hour" ? this.timeInterval * 24 : this.timeInterval;

    const apiRoot = process.env.REACT_APP_API_URL;
    const apiUrl = `${apiRoot}/histo${timeUnit}?fsym=${currency}&tsym=EUR&limit=${timeInterval}`;

    await fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        console.log("Got", response.Data);
        this.currencyData = response.Data;
        this.isLoading = false;
      });
  };

  fetchCurrentPrice = async () => {
    const apiRoot = process.env.REACT_APP_API_URL;
    const apiUrl = `${apiRoot}/pricemulti?fsyms=BTC,ETH&tsyms=EUR`;

    await fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        this.currentPrice.BTC = response.BTC.EUR;
        this.currentPrice.ETH = response.ETH.EUR;
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
