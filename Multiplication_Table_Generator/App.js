import { useState } from 'react'

export default function App() {
	const [number, setNumber] = useState('')
	const [table, setTable] = useState([])
	const handleGenerate = () => {
        //checking if the number is within the valid range
		if (number >= 0 && number <= 1000) {
			const newTable = []
			for (let i = 1; i <= 20; i++) {
				newTable.push(`${number}×${i}=${number * i}`)
			}

			setTable(newTable)
		} else {
			alert('please enter a no between 0 and 1000')
		}
	}
	return (
		<>
			<h1>Multiplication Table Generator!</h1>
			<input
				id="number"
				type="number"
				className="border border-black"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>

			<div>
				<button
					id="generateTable"
					className="border border-slate-500 rounded-lg px-4 mx-8 my-2 hover:bg-sky-200"
					onClick={handleGenerate}
				>
					generate
				</button>
			</div>
			<ul id="multiplicationTable" style={{ listStyleType: 'none' }}>
				{table.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	)
}
