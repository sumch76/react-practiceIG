import React, { useState } from 'react'

const App = () => {
	const [selectedDate, setSelectedDate] = useState('')
	const [daysDifference, setDaysDifference] = useState(null)
	const [error, setError] = useState('')

	const handleDateChange = (e) => {
		setSelectedDate(e.target.value)
		setError('') // Reset error when a new date is selected
		setDaysDifference(null) // Reset daysDifference when date changes
	}

	const handleCalculateDays = () => {
		const currentDate = new Date()
		const inputDate = new Date(selectedDate)

		if (inputDate <= currentDate) {
			setError('error') // Show error if selected date is in the past
			setDaysDifference(null) // Reset daysDifference if there's an error
		} else {
			const timeDifference = inputDate.getTime() - currentDate.getTime()
			const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) // Calculate days difference
			setDaysDifference(days) // Update state with the days difference
			setError('') // Clear error if date is valid
		}
	}

	return (
		<div>
			<h1>Days Until Your Selected Date</h1>
			<input
				type="date"
				id="datePicker"
				value={selectedDate}
				onChange={handleDateChange}
			/>
			<button
				className="border border-black"
				id="findDays"
				onClick={handleCalculateDays}
			>
				Find Days
			</button>

			{daysDifference !== null && (
				<span className="mx-6  border border-black px-2" id="daysLeft">
					{daysDifference}
				</span> // Display only the integer value
			)}

			{error && <div id="error">error</div>}
		</div>
	)
}

export default App
