import { observable, action } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = "";

  @action
  setCurrency = currency => {
    this.currency = currency;
  };
}

export default new AppStore();
