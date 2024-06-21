import { AppState } from "../AppState.js"

class SnackService {
  buySnack(snacks) {
    if (AppState.money >= snacks.price) {
      AppState.money -= snacks.price
      window.alert(`good job you bough ${snacks.name}`)
    }
    else window.alert('Why are you Even Here???')
  }
}
export const boughtSnack = new SnackService()