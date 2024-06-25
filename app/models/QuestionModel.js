export class QuestionModel {
    constructor(data) {
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }


    get questionHTMLTemplate() {
        return `
       <div class="col-12">
      <div class="d-flex justify-content-center">
        <p class="fs-2 fw-bolder">${this.question}?</p>
      </div>
    </div>
    <div class="col-12">
      <div class="d-flex justify-content-center m-2 p-2">
        <div class="p-2">
          <button onclick="app.QuestionsConnector.correctAnswer()" class="btn btn-danger fs-2" >${this.correctAnswer}</button>
        </div>
        <div class="p-2">
          <button  onclick="app.QuestionsConnector.incorrectAnswer()"class="btn btn-success fs-2">${this.incorrectAnswers}</button>
        </div>
      </div>
    </div>
        `
    }

    theAnswer() {
        console.log('The Answer is?!?!?!?!?!?!?!?');
    }
}


