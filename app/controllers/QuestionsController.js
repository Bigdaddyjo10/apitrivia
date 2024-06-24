import { questionService } from "../services/QuestionService.js";

export class QuestionsConnector {
    constructor() {
        this.getQuestions()
    }



    getQuestions() {
        questionService.getQuestions()
    }
}



