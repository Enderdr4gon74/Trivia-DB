import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawQuestions() {
  let template = ''
  appState.questions.forEach(q => template += q.QuestionCardTemplate)
  setHTML("Questions", template)
}

export class QuestionsController {
  constructor () {
    appState.on("questions", _drawQuestions)
    this.getTriviaQuestions()
  }

  async getTriviaQuestions() {
    try {
      await questionsService.getTriviaQuestions()
    } catch (error) {
      console.error('[getTriviaQuestions]', error)
    }
  }

  answerQuestion(ca) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      questionsService.answerQuestion(formData, ca)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[answerQuestion]', error)
    }
  }

  reloadPage() {
    location.reload()
  }
}