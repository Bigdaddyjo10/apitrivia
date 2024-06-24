import { AppState } from "../AppState.js";
import { QuestionModel } from "../models/QuestionModel.js";

class QuestionService {
    async getQuestions() {


        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=32&type=boolean')
        // const data = await questions.json()
        console.log('parsed data to json', res.data);
        // data.results.forEach(questions => console.log(questions.question))

        const questions = res.data.results.map((questionsPOJO) => new QuestionModel(questionsPOJO))
        AppState.questions = questions
    }
}

export const questionService = new QuestionService();