import { AppState } from "../AppState.js"
import { Snack } from "../models/SnackModel.js"
import { boughtSnack } from "../services/SnackServices.js"
import { setHTML } from "../utils/Writer.js"


export class SnacksController {
  constructor() {
    console.log('I am working')
    this.drawSnacks()
  };
  buySnack(SnackName) {
    const snack = AppState.snacks.find((snack) => snack.name = SnackName)
    boughtSnack.buySnack(snack)
  }
  drawSnacks() {
    const snackThing = AppState.snacks
    let htmlString = ''
    AppState.snacks.forEach((snack) => htmlString += snack.someHTMLTemplate)
    setHTML('cards', htmlString)

  }
}
