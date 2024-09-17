import { useState, useEffect } from 'react'
export default function App() {
	const dayNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'Decemebr'
	]

	const now = new Date()
	const [time, setTime] = useState(
		`${String(now.getHours()).padStart(2, '0')}:
        ${String(now.getMinutes()).padStart(2, '0')}:
        ${String(now.getSeconds()).padStart(2,'0')}`
	)
	//use effect for update the time every second
	useEffect(() => {
		setInterval(() => {
			const currentTime = new Date()
			setTime(
				`${String(currentTime.getHours()).padStart(2, '0')}:
                 ${String(currentTime.getMinutes()).padStart(2, '0')}:
                 ${String(currentTime.getSeconds()).padStart(2,'0')}`
			)
		}, 1000)
	}, [])

	return (
		<>
			<h1>Hello there!</h1>
			<div id="day">{dayNames[now.getDay()]}</div>

			<div id="date">
				{months[now.getMonth()]} {now.getDate()}, {now.getFullYear()}
			</div>

			<div id="time">{time}</div>
		</>
	)
}
