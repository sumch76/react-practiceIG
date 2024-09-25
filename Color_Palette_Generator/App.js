import React, { useState } from 'react'
//import './App.css' // Create an appropriate CSS file for styling

const App = () => {
	const [currentPalette, setCurrentPalette] = useState([])
	const [savedPalettes, setSavedPalettes] = useState([])

	// Function to generate random hex color
	const getRandomColor = () => {
		const letters = '0123456789ABCDEF'
		let color = '#'
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		return color
	}

	// Generate random color palette
	const generatePalette = () => {
		const palette = Array.from({ length: 5 }, () => getRandomColor())
		setCurrentPalette(palette)
	}

	// Save the current palette
	const savePalette = () => {
		setSavedPalettes([...savedPalettes, currentPalette])
		setCurrentPalette([]) // Clear after saving
	}

	// Delete a saved palette
	const deletePalette = (index) => {
		setSavedPalettes(savedPalettes.filter((_, i) => i !== index))
	}

	return (
		<div className="App">
			<h1>Color Palette Generator</h1>
			{/* Generate Button */}
			<button id="generate" onClick={generatePalette}>
				Generate Palette
			</button>
			{/* Display Current Palette */}
			<div id="current-palette">
				{currentPalette.map((color, index) => (
					<div
						key={index}
						className="color-block"
						style={{ backgroundColor: color }}
					>
						{color}
					</div>
				))}
				<button id="save" onClick={savePalette}>
					Save Palette
				</button>
			</div>
			{/* Display Saved Palettes */}
			<div id="saved-palettes">
				{savedPalettes.map((palette, paletteIndex) => (
					<div key={paletteIndex} className="saved-palette">
						{palette.map((color, colorIndex) => (
							<div
								key={colorIndex}
								className="color-block"
								style={{ backgroundColor: color }}
							>
								{color}
							</div>
						))}
						<button
							className="delete-palette-button"
							onClick={() => deletePalette(paletteIndex)}
						>
							Delete Palette
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
