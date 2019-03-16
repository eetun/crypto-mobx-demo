import { observable, action } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = 1;

  @action
  setCurrency = currency => {
    this.currency = currency;
  };

  @action
  setTimeInterval = timeInterval => {
    this.timeInterval = timeInterval;
  };

  getCurrencyName = () => {
    switch (this.currency) {
      case "BTC":
        return "BitCoin";
        break;
      case "ETH":
        return "Ethereum";
        break;
      default:
        return null;
    }

    return null;
  };
}

export default new AppStore();
