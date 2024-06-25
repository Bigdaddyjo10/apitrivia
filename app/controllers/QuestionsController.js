import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuestionsConnector {
    constructor() {
        AppState.on('questions', this.drawQuestions)
        this.getQuestions()
    }


    async getQuestions() {
        try {
            await questionService.getQuestions();
            Pop.success("Answer me this...🤔🤔")
        } catch (error) {
            Pop.error(error)
        }
    }

    drawQuestions() {
        const theQuestions = AppState.questions
        let innerHTMLSting = ''
        theQuestions.forEach((question) => innerHTMLSting = question.questionHTMLTemplate)
        setHTML('showQuestion', innerHTMLSting)
    }


    incorrectAnswer() {
        const theAnswer = AppState.questions
        let answer
        theAnswer.forEach((question) => answer = question.incorrectAnswers)
        if (answer == this.incorrectAnswer) {
            console.log(true);
            Pop.success("🎉You got it right!!!🥳🍾")
        } else {
            console.log(!true);
            Pop.error("NOPE")
        }
    }
    correctAnswer() {
        const theAnswer = AppState.questions
        let answer
        theAnswer.forEach((question) => answer = question.correctAnswer)
        if (answer == this.correctAnswer) {
            console.log(!true);
            Pop.error("NOPE")
        } else {
            console.log(true);
            Pop.success("🎉You got it right!!!🥳🍾")
        }
    }
    newQuestion() {
        location.reload();
        Pop.success("🎉🥳🍾")
    }

}