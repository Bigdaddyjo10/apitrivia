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
        <h1>${this.question}?</h1>
        `
    }
}


