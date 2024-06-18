import { AppState } from "../AppState.js"


export class SnacksController {
  constructor() {
    console.log('I am working')
  }
  buySnack(SnackName) {
    const snack = AppState.snacks.find((snack) => snack.name = SnackName)
    buySnack(snack)
  }
}
