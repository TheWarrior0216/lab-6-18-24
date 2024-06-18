import { Snack } from "./models/SnackModel.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  examples = []
  snacks = [
    new Snack({
      name: 'Feastable',
      price: 3.50,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0085002788012'
    })
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())