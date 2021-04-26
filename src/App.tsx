import React, { useState } from "react";

import "./App.css";

//components
import SelectCard from "./components/select-card/select-card";
import QuestionCard from "./components/question-card/question-card";

//API Call
import { fetchQestions } from "./API";

//interfaces
import { AnswerObject, QuestionsState } from "./interfaces";

//question amount
const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
	//states
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("easy");
	const [questions, setQuestions] = useState<QuestionsState[]>([]);
	const [questionNumber, setquestionNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [restart, setRestart] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>("");

	// API URL
	const url = `https://opentdb.com/api.php?amount=10${
		selectedCategory ? `&category=${selectedCategory}` : ""
	}&difficulty=${selectedDifficulty}&type=multiple`;

	const startQuiz = async () => {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQestions(setError, setGameOver, url);
		setQuestions(newQuestions);
		setScore(0);
		setquestionNumber(0);
		setUserAnswers([]);
		setLoading(false);
	};

	const selectDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDifficulty(e.target.value);
	};

	const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(e.target.value);
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
		if (questionNumber === TOTAL_QUESTIONS - 1) {
			setRestart(true);
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

	const handleRestart = () => {
		setRestart(false);
		setGameOver(true);
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
			{!gameOver && !restart && !loading ? (
				<p className="score">Score: {score}</p>
			) : null}
			{loading ? <div className="loading-spinner"></div> : null}
			{gameOver && error ? <h1 className="error">{error}</h1> : null}
			{!gameOver && restart ? (
				<h2 className="final-score">Your score was {score}</h2>
			) : null}
			{restart ? (
				<button className="restart" onClick={handleRestart}>
					&#8634;
				</button>
			) : null}
			<div className="question-card-wrapper">
				{!gameOver && !loading && questions.length > 0 && !restart ? (
					<QuestionCard
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[questionNumber].question}
						answers={questions[questionNumber].answers}
						checkAnswer={checkAnswer}
						questionNumber={questionNumber + 1}
						userAnswer={userAnswers ? userAnswers[questionNumber] : null}
					/>
				) : null}
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
