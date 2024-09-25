export default function App() {
	// You can make use of this object to construct the select elements and the conversion
	const conversionRates = {
		centimeters: 1,
		inches: 2.54,
		feet: 30.48,
		meters: 100,
		kilometers: 100000,
		miles: 160934.4
	}
	const [number, setNumber] = useState('')
	const [conversion, setConversion] = useState('')
	const [toUnit, setToUnit] = useState(null)
	const [fromUnit, setFromUnit] = useState(null)
	function handleConversion() {
		if (fromUnit && toUnit && number) {
			const fromValueinCm = number * conversionRates[fromUnit]
			const convertedValue = fromValueinCm / conversionRates[toUnit]
			setConversion(convertedValue.toFixed(3))
		} else {
			setConversion('please provide valid inputs.')
		}
	}

	return (
		<>
			<h1>Hello there!</h1>
			<select id="fromUnit" onChange={(e) => setFromUnit(e.target.value)}>
				<option value="" disabled hidden>
					FROM
				</option>
				<option value="centimeters">centimeters</option>
				<option value="inches">inches</option>
				<option value="feet">feet</option>
				<option value="meters">meters</option>
				<option value="kilometers">kilometers</option>
				<option value="miles">miles</option>
			</select>
			<select id="toUnit" onChange={(e) => setToUnit(e.target.value)}>
				<option value="" disabled hidden>
					TO
				</option>
				<option value="centimeters">centimeters</option>
				<option value="inches">inches</option>
				<option value="feet">feet</option>
				<option value="meters">meters</option>
				<option value="kilometers">kilometers</option>
				<option value="miles">miles</option>
			</select>
			<input
				type="number"
				id="fromValue"
				className="border border-2 border-black"
				onChange={(e)=>setNumber(e.target.value)}
			/>
			<button id="convert" onClick={handleConversion}>
				Convert
			</button>
			<div id="outputValue">{conversion}</div>
		</>
	)
}
