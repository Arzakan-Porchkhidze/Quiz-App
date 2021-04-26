import { shuffleArray } from "./utils";

import { Question } from "./interfaces";

//API call
export const fetchQestions = async (
	setError: (value: React.SetStateAction<string>) => void,
	setGameOver: (value: React.SetStateAction<boolean>) => void,
	url: string
) => {
	try {
		const data = await (await fetch(url)).json();
		if (data.response_code === 0) {
			setError("");
			return data.results.map((question: Question) => ({
				...question,
				answers: shuffleArray([
					...question.incorrect_answers,
					question.correct_answer,
				]),
			}));
		} else if (data.response_code === 1) {
			setError("no results for this category");
			setGameOver(true);
		}
	} catch {
		setError("something went wrong please try again");
		setGameOver(true);
	}
};
