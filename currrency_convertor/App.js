import React, { useState } from "react"

export default function App() {

	const[fromInput,setFromInput]=useState(null);
	const[toInput,setToInput]=useState(null);
	const[result,setResult]=useState(null);

	const handleConvert=()=>
	{
		fetch('https://open.er-api.com/v6/latest/'+fromInput)
		.then(response => response.json())
		.then(data => {
		  const rate = data.rates[toInput]; // Assuming EUR is the target currency
		  const convertedValue = 1 * rate; // Convert 1 unit of USD to EUR
		  setResult(convertedValue);
		});	
	}
	return (
		<>
			<h1>Hello there!</h1>
			<input
				type="text"
				id="from"
				maxlength="3"
				placeholder="From: e.g., USD"
				className="border"
				onChange={(e)=>setFromInput(e.target.value)}
			/>
			<input
				type="text"
				id="to"
				maxlength="3"
				placeholder="To: e.g., EUR"
				onChange={(e)=>setToInput(e.target.value)}
			/>
			<div><button id="convert"  className="border rounded-lg shadow-2xl"onClick={handleConvert}>Convert</button></div>
			<div id="currencyValue">{result}</div>
		</>
	)
};
