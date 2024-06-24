import { QuestionsConnector } from "./controllers/QuestionsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [QuestionsConnector],
    view: 'app/views/HomeView.html'
  }
])