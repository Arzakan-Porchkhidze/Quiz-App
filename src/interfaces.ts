//answer object
export interface AnswerObject {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
}

//question object
export interface Question {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export interface QuestionsState extends Question {
	answers: string[];
}
