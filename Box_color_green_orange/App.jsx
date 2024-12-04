import React, { useState } from 'react';

const Matrix = () => {
  // Initialize the matrix state to be an array of 9 elements (3x3 grid)
  const [matrix, setMatrix] = useState(Array(9).fill('white'));
  const [clickedIndices, setClickedIndices] = useState([]);

  const handleClick = (index) => {
    // Create a copy of the matrix
    const newMatrix = [...matrix];

    // If the last box (index 8) is clicked, change all boxes to orange in the sequence of their original clicks
    if (index === 8) {
      const newColors = [...newMatrix];
      clickedIndices.forEach((i, idx) => {
        setTimeout(() => {
          newColors[i] = 'orange';
          setMatrix([...newColors]);
        }, idx * 500); // Delay the change to give a sequence effect
      });
    } else {
      // Otherwise, just turn the clicked box green and add the index to the clicked list
      newMatrix[index] = 'green';
      setMatrix(newMatrix);
      setClickedIndices([...clickedIndices, index]);
    }
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px' }}>
        {matrix.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid black',
              backgroundColor: color === 'green' ? 'green' : color === 'orange' ? 'orange' : 'white',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
