import { useState } from 'react'
//import "./App.css";
function App() {
	const [celsius, setCelsius] = useState(0)
const [fahrenheit, setFarhenheit] = useState((0 * 9) / 5 + 32)

const handleCelsius = (e) => {
	const celsiusValue = e.target.value
	setCelsius(celsiusValue)
	setFarhenheit((celsiusValue * 9) / 5 + 32)
}

const handleFahrenheit = (e) => {
	const fahrenheitValue = e.target.value
	setFarhenheit(fahrenheitValue)
	setCelsius(((fahrenheitValue - 32) * 5) / 9)
}

	return (
		<>
			<input
				type="number"
				id="celsius"
				className="border border-black"
				placeholder="enter temp in celsius"
				value={celsius}
				onChange={handleCelsius}
			/>
			<input
				type="number"
				id="fahrenheit"
				className="border border-black"
				placeholder="enter temp in fahrenheit"
				value={fahrenheit}
				onChange={handleFahrenheit}
			/>
		</>
	)
}

export default App
