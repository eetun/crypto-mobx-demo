import { observable, action } from "mobx";

export class AppStore {
  @observable currency = "BTC";
  @observable timeInterval = "";
}

export default new AppStore();
