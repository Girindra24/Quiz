import "./App.css";
import React, { useState } from "react";
import questions from "./questions";

function App() {
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const handleAnswerCheck = (validate) => {
		console.log(`isCorrect --> ${validate}`);
		if (validate) {
			console.log(`Inside If`);
			setScore(score + 1);
		}
		if (currentQuestion + 1 !== questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowScore(true);
		}

		console.log(`Score ${score} and currentQuestion ${currentQuestion}`);
	};

	return isReady ? (
		showScore ? (
			<div className='score-section'>
				<p>You Scored {score}</p>
			</div>
		) : (
			<div>
				<div>
					<p>Question: {currentQuestion + 1}</p>
				</div>
				<div>{questions[currentQuestion].question}</div>
				<div>
					{questions[currentQuestion].answerOptions.map((option) => {
						return (
							<div>
								<button
									onClick={() => {
										handleAnswerCheck(option.isCorrect);
									}}
								>
									{option.answerText}
								</button>
								{/* <label>{option.answerText}</label> */}
								{/* <input
									type='checkbox'
									id='option'
									name='option'
									value='option'
									defaultChecked={isChecking}
									onClick={() => {
										handleAnswerCheck(option.isCorrect);
									}}
								></input> */}
							</div>
						);
					})}
				</div>
			</div>
		)
	) : (
		<div className='welcome-section'>
			<p>Welcome</p>
			<button
				onClick={() => {
					setIsReady(true);
				}}
			>
				Start the Quiz
			</button>
		</div>
	);
}

export default App;
