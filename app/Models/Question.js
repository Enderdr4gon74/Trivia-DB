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
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h4>${this.question}</h4>
              <div class="d-flex justify-content-between">
                <h6>Category: ${this.category}, </h6>
                <h6>Difficulty: ${this.difficulty}, </h6>
                <h6>Type: ${this.type}</h6>
              </div>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[1]}">${this.incorrect_answers[1]}</option>
                    <option value="${this.incorrect_answers[2]}">${this.incorrect_answers[2]}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      } else if (num == 1) {
        return /*html*/`
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h4>${this.question}</h4>
              <div class="d-flex justify-content-between">
                <h6>Category: ${this.category}, </h6>
                <h6>Difficulty: ${this.difficulty}, </h6>
                <h6>Type: ${this.type}</h6>
              </div>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[1]}">${this.incorrect_answers[1]}</option>
                    <option value="${this.incorrect_answers[2]}">${this.incorrect_answers[2]}</option>
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
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h4>${this.question}</h4>
              <div class="d-flex justify-content-between">
                <h6>Category: ${this.category}, </h6>
                <h6>Difficulty: ${this.difficulty}, </h6>
                <h6>Type: ${this.type}</h6>
              </div>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[1]}">${this.incorrect_answers[1]}</option>
                    <option value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers[2]}">${this.incorrect_answers[2]}</option>
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
        <div class="col-md-6 mb-3">
          <div class="card">
            <div class="card-header">
              <h4>${this.question}</h4>
              <div class="d-flex justify-content-between">
                <h6>Category: ${this.category}, </h6>
                <h6>Difficulty: ${this.difficulty}, </h6>
                <h6>Type: ${this.type}</h6>
              </div>
            </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected value="${this.incorrect_answers[0]}">${this.incorrect_answers[0]}</option>
                    <option value="${this.incorrect_answers[1]}">${this.incorrect_answers[1]}</option>
                    <option value="${this.incorrect_answers[2]}">${this.incorrect_answers[2]}</option>
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
    } else if (this.type == "boolean") {
      let num = Math.round(Math.random())
      if (num == 0) {
        return /*html*/`
        <div class="col-md-6 mb-3">
          <div class="card">
          <div class="card-header">
            <h4>${this.question}</h4>
            <div class="d-flex justify-content-between">
              <h6>Category: ${this.category}, </h6>
              <h6>Difficulty: ${this.difficulty}, </h6>
              <h6>Type: ${this.type}</h6>
            </div>
          </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                    <option selected value="${this.correct_answer}">${this.correct_answer}</option>
                    <option value="${this.incorrect_answers}">${this.incorrect_answers}</option>
                  </select>
                  <button type="submit" class="btn btn-success">Answer!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        `
      } else if (num == 1) {
        return /*html*/`
        <div class="col-md-6 mb-3">
          <div class="card">
          <div class="card-header">
            <h4>${this.question}</h4>
            <div class="d-flex justify-content-between">
              <h6>Category: ${this.category}, </h6>
              <h6>Difficulty: ${this.difficulty}, </h6>
              <h6>Type: ${this.type}</h6>
            </div>
          </div>
            <div class="card-body">
              <form onsubmit="app.questionsController.answerQuestion('${this.correct_answer}')" class="width-100">
                <div class="d-flex width-100 justify-content-between">
                  <select class="form-select me-4" name="answer">
                  <option selected value="${this.incorrect_answers}">${this.incorrect_answers}</option>
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
    }
  }
}