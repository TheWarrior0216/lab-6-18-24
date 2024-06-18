import { AppState } from "../AppState.js"

class SnackService {
  buySnack(snacks) {
    AppState.money -= snacks.price
  }
}
export const boughtSnack = new SnackService()