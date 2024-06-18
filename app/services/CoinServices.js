import { AppState } from "../AppState.js";

class AddCoins {
  addQuarters() {
    AppState.money += 0.25
    console.log('adding Quarters in Services', AppState.money)
  }
}
export const increaseMoney = new AddCoins()