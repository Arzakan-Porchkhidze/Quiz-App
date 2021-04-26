import React, { useState } from "react";

import "./App.css";

//components
import SelectCard from "./components/select-card/select-card";
import QuestionCard from "./components/question-card/question-card";

//utils
import { shuffleArray } from "./utils";

//question amount
const TOTAL_QUESTIONS = 10;

//answer object
export interface AnswerObject {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
}

const App: React.FC = () => {
	//states
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("easy");
	const [questions, setQuestions] = useState<QuestionsState[]>([]);
	const [questionNumber, setquestionNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

	interface Question {
		category: string;
		correct_answer: string;
		difficulty: string;
		incorrect_answers: string[];
		question: string;
		type: string;
	}

	interface QuestionsState extends Question {
		answers: string[];
	}

	const fetchQestions = async () => {
		const url = `https://opentdb.com/api.php?amount=10${
			selectedCategory ? `&category=${selectedCategory}` : ""
		}&difficulty=${selectedDifficulty}&type=multiple`;
		const data = await (await fetch(url)).json();
		console.log(data);
		return data.results.map((question: Question) => ({
			...question,
			answers: shuffleArray([
				...question.incorrect_answers,
				question.correct_answer,
			]),
		}));
	};

	const startQuiz = async () => {
		setGameOver(false);
		const newQuestions = await fetchQestions();
		setQuestions(newQuestions);
		setScore(0);
		setquestionNumber(0);
		setUserAnswers([]);
		console.log(newQuestions);
	};

	const selectDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDifficulty(e.target.value);
		console.log(e.target.value);
	};

	const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(e.target.value);
		console.log(e.target.value);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// User's answer
			const answer = e.currentTarget.value;
			// Check answer against correct answer
			const correct = questions[questionNumber].correct_answer === answer;
			// Increase score if answer is correct
			if (correct) {
				setScore((prev) => prev + 1);
			}
			// Save the answer in the array for user answers
			const answerObject = {
				question: questions[questionNumber].question,
				answer,
				correct,
				correctAnswer: questions[questionNumber].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// Move on to the next question if it's not the last question
		const nextQ = questionNumber + 1;

		if (nextQ === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setquestionNumber(nextQ);
		}
	};

	return (
		<div className="App">
			<h1 className="title">Quiz app</h1>
			{gameOver && (
				<>
					<SelectCard
						selectCategory={selectCategory}
						selectedCategory={selectedCategory}
						selectDifficulty={selectDifficulty}
						selectedDifficulty={selectedDifficulty}
					/>
					<button className="start" onClick={startQuiz}>
						start
					</button>
				</>
			)}
			{!gameOver ? <p className="score">Score: {score}</p> : null}
			<div className="question-card-wrapper">
				{questions.length > 0 && (
					<QuestionCard
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[questionNumber].question}
						answers={questions[questionNumber].answers}
						checkAnswer={checkAnswer}
						questionNumber={questionNumber + 1}
						userAnswer={userAnswers ? userAnswers[questionNumber] : null}
					/>
				)}
				{!gameOver &&
				userAnswers.length === questionNumber + 1 &&
				questionNumber !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						next
					</button>
				) : null}
			</div>
		</div>
	);
};

export default App;
