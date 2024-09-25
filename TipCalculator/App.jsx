import { useState } from 'react'

export default function App() {
	const [amount, setAmount] = useState(null)
	const [tipAmount, setTipAmount] = useState(null)
	const [totalAmountBill, setTotalAmountBill] = useState(null)
	function handleAmount() {
		
		const total = parseFloat(amount)+(parseFloat(amount)*parseFloat(tipAmount)/100);
		setTotalAmountBill(total.toFixed(2)) // Format to two decimal places
	}
	return (
		<>
			<h1>Hello there!</h1>
			bill Amount :
			<input
				type="text"
				id="billAmount"
				className="border-2 border-black rounded-lg"
				onChange={(e) => setAmount(e.target.value)}
			/>
			<br></br>
			Tip Percent:
			<input
				type="text"
				id="tipPercent"
				className="border-2 border-black rounded-lg"
				onChange={(e) => setTipAmount(e.target.value)}
			/>
			<br></br>
			<button
				id="calculateAmount"
				className="flex justify-center items-center border border-black rounded-lg bg-gray-400"
				onClick={handleAmount}
			>
				total amount
			</button>
			<p id="totalAmount" className="flex justify-center">
				{totalAmountBill}
			</p>
		</>
	)
}
