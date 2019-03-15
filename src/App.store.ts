import { observable, action } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = "";

  @action
  setCurrency = currency => {
    this.currency = currency;
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
