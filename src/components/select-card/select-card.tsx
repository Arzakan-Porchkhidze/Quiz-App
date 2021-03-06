import React, { useEffect, useState } from "react";

import "./select-card.css";

interface Props {
	selectedCategory: string;
	selectCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	selectDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	selectedDifficulty: string;
}

const SelectCard: React.FC<Props> = ({
	selectedCategory,
	selectCategory,
	selectDifficulty,
	selectedDifficulty,
}) => {
	const [categories, setCategories] = useState<{ id: number; name: string }[]>(
		[]
	);

	useEffect(() => {
		const cateogriesUrl = "https://opentdb.com/api_category.php";
		const fetchCategories = async () => {
			const returnedCategories = await (await fetch(cateogriesUrl)).json();
			setCategories(returnedCategories.trivia_categories);
		};
		fetchCategories();
		return function cleanUp() {
			setCategories([]);
		};
	}, []);
	return (
		<div className="select-card">
			<div className="custom-select">
				<label>
					<span className="diff-span">difficulty:</span>
					<select value={selectedDifficulty} onChange={selectDifficulty}>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
					<span className="custom-arrow"></span>
				</label>
			</div>
			<div className="custom-select">
				<label>
					<span className="category-span">category:</span>
					<select value={selectedCategory} onChange={selectCategory}>
						<option value="">Any Category</option>
						{categories.length > 0
							? categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
							  ))
							: null}
					</select>
					<span className="custom-arrow"></span>
				</label>
			</div>
		</div>
	);
};

export default SelectCard;
