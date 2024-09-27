import React, { useState } from 'react';

const App = () => {
  // State to keep track of the currently active accordion
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample data for accordion questions and answers
  const accordionData = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
  ];

  // Function to handle the accordion item click
  const toggleAccordion = (index) => {
    // If the clicked item is already open, collapse it, otherwise set it as active
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion">
          <div
            className="question"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </div>
          {index === activeIndex && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
