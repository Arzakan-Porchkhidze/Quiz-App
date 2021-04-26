import React from "react";

import "./question-card.css";

//interface
import { AnswerObject } from "../../App";

interface QuizProps {
	question: string;
	totalQuestions: number;
	answers: string[];
	checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
	questionNumber: number;
	userAnswer: AnswerObject | null;
}

const QuestionCard: React.FC<QuizProps> = ({
	question,
	totalQuestions,
	answers,
	checkAnswer,
	questionNumber,
	userAnswer,
}) => {
	return (
		<div className="question-card">
			<p className="number">
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p className="question" dangerouslySetInnerHTML={{ __html: question }} />
			<div className="answers">
				{answers.map((answer) => (
					<button
						className={`answer ${
							//add class acording answer
							userAnswer?.correctAnswer === answer &&
							userAnswer?.answer === answer
								? "correct"
								: userAnswer?.answer === answer
								? "clicked-button"
								: userAnswer?.correctAnswer === answer
								? "correct"
								: ""
						}`}
						disabled={userAnswer ? true : false}
						value={answer}
						onClick={checkAnswer}
						key={answer}
						dangerouslySetInnerHTML={{ __html: answer }}
					/>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
