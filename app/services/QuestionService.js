class QuestionService {
    async getQuestions() {
        const questions = await fetch('https://opentdb.com/api.php?amount=10&category=32&type=boolean')
        console.log(questions, '🤌🤌🤌');
        const data = await questions.json()
        console.log('parsed data to json', data);

    }
}

export const questionService = new QuestionService();