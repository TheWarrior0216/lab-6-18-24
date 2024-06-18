
import { MoneysController } from "./controllers/MoneysController.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [SnacksController, MoneysController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])