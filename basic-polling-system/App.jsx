import { useState } from 'react'

const PollComponent = () => {
	// State variables for each option's vote count
	const [optionA, setOptionA] = useState(0)
	const [optionB, setOptionB] = useState(0)
	const [optionC, setOptionC] = useState(0)
	const [optionD, setOptionD] = useState(0)

	return (
		<>
			{/* Challenge 1: Display the Poll Question */}
			<h4 id="question">What is your favorite option?</h4>

			{/* Challenge 2-4: Set up voting buttons with two <span> elements */}
			<button
				className="option"
				onClick={(e) => setOptionA((count) => count + 1)}
			>
				<span>Option A</span> {/* Option name */}
				<span>{optionA}</span> {/* Vote count */}
			</button>

			<button
				className="option"
				onClick={(e) => setOptionB((count) => count + 1)}
			>
				<span>Option B</span>
				<span>{optionB}</span>
			</button>

			<button
				className="option"
				onClick={(e) => setOptionC((count) => count + 1)}
			>
				<span>Option C</span>
				<span>{optionC}</span>
			</button>

			<button
				className="option"
				onClick={(e) => setOptionD((count) => count + 1)}
			>
				<span>Option D</span>
				<span>{optionD}</span>
			</button>
		</>
	)
}

export default function App() {
	return (
		<>
			<h1>Welcome to the Poll!</h1>
			<PollComponent />
		</>
	)
}
