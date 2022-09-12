export class Question {
  constructor(data) {
    this.question = data.question
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get QuestionCardTemplate() {
    if (this.type == "multiple") {
      let num = Math.round(Math.random()*3)
      if (num == 0) {
        return /*html*/`
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>${this.question}</h3>
              <h5>Category: ${this.category}, Difficulty: ${this.difficulty}, Type: ${this.type}</h5>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion()" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      } else if (num ==1) {
        return /*html*/`
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>${this.question}</h3>
              <h5>Category: ${this.category}, Difficulty: ${this.difficulty}, Type: ${this.type}</h5>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion()" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      } else if (num == 2) {
        return /*html*/`
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>${this.question}</h3>
              <h5>Category: ${this.category}, Difficulty: ${this.difficulty}, Type: ${this.type}</h5>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion()" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      } else if (num == 3) {
        return /*html*/`
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>${this.question}</h3>
              <h5>Category: ${this.category}, Difficulty: ${this.difficulty}, Type: ${this.type}</h5>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion()" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      }
      return `
      <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h3>Question</h3>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('id')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="answer-1">answer 1</option>
                    <option value="answer-2">answer 2</option>
                    <option value="answer-3">answer 3</option>
                    <option value="answer-4">answer 4</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `
    } else if (this.type == "boolean") {
      return `
      <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Question</h3>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('id')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected>Choose an Answer</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `
    }
  }
}