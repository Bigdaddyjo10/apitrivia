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
            Pop.success("Now that is the question")
        } catch (error) {
            Pop.error(error)
        }
    }

    drawQuestions() {
        const theQuestions = AppState.questions
        let innerHTMLSting = ''
        theQuestions.forEach((question) => innerHTMLSting += question.questionHTMLTemplate)
        setHTML('showQuestion', innerHTMLSting)
    }
}



