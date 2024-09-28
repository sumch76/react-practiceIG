import React, { useState } from 'react';

export default function App() {
  // Initialize state to track open/closed state for each accordion item
  const [activeIndex, setActiveIndex] = useState([false, false, false, false]);
  const accordionData = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
  ];

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    const updatedOpenItems = [...activeIndex];
    updatedOpenItems[index] = !updatedOpenItems[index]; // Toggle the specific accordion item
    setActiveIndex(updatedOpenItems); // Update state
  };

  return (
    <>
      <h1>Multiple Accordions Example</h1>

      {/* First Accordion Item */}
      {accordionData.map((item, index) => (
        <div className="accordion" key={index}>
          <div id="question" onClick={() => toggleAccordion(index)}>
            {item.question}
          </div>
          {activeIndex[index] && <div id="answer">{item.answer}</div>}
        </div>
      ))}
    </>
  );
}
