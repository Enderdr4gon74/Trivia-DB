import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";
import { triviaServer } from "./AxiosService.js";

class QuestionsService {

  async getTriviaQuestions () {
    const ques = await triviaServer.get('api.php?amount=10')

    console.log("items: ", ques.data.results.map(rawData => new Question(rawData)))
    appState.questions = ques.data.results.map(rawData => new Question(rawData))
    // .map(rawData => new Question(rawData))

  }

  answerQuestion(formData, ca) {
    console.log(ca)
    let question = appState.questions.findIndex(q => q.correct_answer == ca)
    console.log(question, formData)
    if (formData.answer == appState.questions[question].correct_answer) {
      Pop.toast("Correct", "success", "top-end")
    } else {
      Pop.toast("Incorrect", "error", "top-end")
    }
  }
}

export const questionsService = new QuestionsService()