import { useState } from 'react'

export default function App() {
	const [selectedEmoji, setSelectedEmoji] = useState('')
	const [feedback, setFeedback] = useState('')
	const [showFeedbackForm, setShowFeedbackform] = useState(false)

	function handleEmojiClick(emoji) {
	
		//if we do not want inline callaback we can here put the emoji value
		//const emoji=e.target.value;
		//in above instead of emoji we need to write e then
		setSelectedEmoji(emoji)
		setShowFeedbackform(true)
	}

	const handleSubmit = () => {
		if (selectedEmoji && feedback) {
			console.log(`Emoji: ${selectedEmoji}, Feedback: ${feedback}`)
			setSelectedEmoji('') // Reset the selected emoji
			setFeedback('') // Clear the feedback text
			setShowFeedbackform(false) // Hide the feedback form
		}
	}

	return (
		<>
			<h1>Hello there!</h1>
			<div id="feedback" className="">
				<button
					className="m-2 px-2 border-2 border-black rounded-lg"
					onClick={() => handleEmojiClick('😍')}
				>
					😍
				</button>
				<button
					className="m-2 px-2 border-2 border-black rounded-lg"
					onClick={() => handleEmojiClick('😊')}
				>
					😊
				</button>
				<button
					className="m-2 px-2 border-2 border-black rounded-lg"
					onClick={() => handleEmojiClick('😭')}
				>
					😭
				</button>
				<button
					className="m-2 px-2 border-2 border-black rounded-lg"
					onClick={() => handleEmojiClick('🙁')}
				>
					🙁
				</button>
			</div>
			{showFeedbackForm && (
				<div className='border-2 h-40  w-64 shadow-lg'>
					<textarea className='border-2 m-3 my-6'
						placeholder="enter your feedback"
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
					/>
					<button id="submit" className='w-1/2 flex items-center justify-center rounded-md border border-gray-300' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			)}
		</>
	)
}
