import { AppState } from "../AppState.js"
import { increaseMoney } from "../services/CoinServices.js"
import { setHTML } from "../utils/Writer.js"

export class MoneysController {
  constructor() {
    AppState.on('money', this.drawMoney)
  }
  addQuarter() {
    console.log('adding Quarter in Controllers')
    increaseMoney.addQuarters()

  }
  drawMoney() {
    setHTML('money', `$${AppState.money.toFixed(2)}`)
  }
}