import { Snack } from "./models/SnackModel.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  examples = []
  /**@type {Snack[]} */
  snacks = [
    new Snack({
      name: 'Feastable',
      price: 3.50,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0085002788012'
    }
    ),
    new Snack({
      name: 'Ranch',
      price: .25,
      imgUrl: 'https://th.bing.com/th/id/R.6d63b2c9efbf4255e7a1e2fe0757f793?rik=Se9UhzcslZ12wA&pid=ImgRaw&r=0'
    }),
    new Snack({
      name: 'Feastable',
      price: 3.50,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0085002788012'
    }),
    new Snack({
      name: 'Feastable',
      price: 3.50,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0085002788012'
    }),
    new Snack({
      name: 'Feastable',
      price: 3.50,
      imgUrl: 'https://www.kroger.com/product/images/large/front/0085002788012'
    })
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())