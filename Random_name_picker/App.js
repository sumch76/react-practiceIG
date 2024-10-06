import React, { useState } from 'react'

function RandomNamePicker() {
	const [nameList, setNameList] = useState([])
	const [pickedNames, setPickedNames] = useState([])
	const [selectedName, setSelectedName] = useState('')

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && e.target.value.trim()) {
			setNameList([...nameList, e.target.value.trim()])
			e.target.value = '' // Clear input field
		}
	}
	const pickRandomName = () => {
		if (nameList.length > 0) {
			const randomIndex = Math.floor(Math.random() * nameList.length)
			const name = nameList[randomIndex]
			setSelectedName(name)
			setPickedNames([...pickedNames, name])
			setNameList(nameList.filter((n, index) => index !== randomIndex))
		}
	}

	return (
		<div>
			<input
				type="text"
				id="nameInput"
				placeholder="Enter name"
				onKeyDown={handleKeyDown}
			/>

			<div id="nameList">
				{nameList.map((name, index) => (
					<span key={index} className="name border border-black mx-1 px-1">
						{name}
					</span>
				))}
			</div>

			<button id="pick" onClick={pickRandomName}>
				Pick a Name
			</button>

			<dialog id="nameDialog" open={selectedName !== ''}>
				<p>{selectedName}</p>
				
			</dialog>

			<div id="pickedList">
				{pickedNames.map((name, index) => (
					<span
						key={index}
						className="name border border-black mx-1 px-2"
					>
						{name}
					</span>
				))}
			</div>
		</div>
	)
}

export default RandomNamePicker
