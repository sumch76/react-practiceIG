import { useState } from "react";

export default function App() {
  // State to track which accordion is active (open)
  const [activeIndex, setActiveIndex] = useState(0);
  // if i do not want by default any accordion open
  // Set to -1 to indicate that no accordion is open by default
  // const [activeIndex, setActiveIndex] = useState(-1);

  // Function to toggle the accordion
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <h1>Hello there!</h1>
      
      {/* First Accordion Item */}
      <div className="accordion">
        <div className="question" onClick={() => toggleAccordion(0)}>
          Question 1
        </div>
        {activeIndex === 0 && <div className="answer">Answer 1</div>}
      </div>

      {/* Second Accordion Item */}
      <div className="accordion">
        <div className="question" onClick={() => toggleAccordion(1)}>
          Question 2
        </div>
        {activeIndex === 1 && <div className="answer">Answer 2</div>}
      </div>

      {/* Third Accordion Item */}
      <div className="accordion">
        <div className="question" onClick={() => toggleAccordion(2)}>
          Question 3
        </div>
        {activeIndex === 2 && <div className="answer">Answer 3</div>}
      </div>

      {/* Fourth Accordion Item */}
      <div className="accordion">
        <div className="question" onClick={() => toggleAccordion(3)}>
          Question 4
        </div>
        {activeIndex === 3 && <div className="answer">Answer 4</div>}
      </div>
    </>
  );
}
