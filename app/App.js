// import { ValuesController } from "./Controllers/ValuesController.js";
import { QuestionsController } from "./Controllers/QuestionsController.js";

class App {
  questionsController = new QuestionsController()
  // valuesController = new ValuesController();
}

window["app"] = new App();
