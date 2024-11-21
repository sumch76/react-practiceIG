import React, { useState } from "react";

const NameForm = ({ setName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue.trim());
  };

  return (
    <div className="form-container">
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default NameForm;
