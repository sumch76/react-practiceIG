import React, { useState, useRef } from 'react';

const OtpInput = ({ length = 4 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const updatedOtp = [...otp];
    updatedOtp[index] = value.charAt(value.length - 1) || '';
    setOtp(updatedOtp);

    // Move to the next input box if not empty
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace') {
      if (otp[index]) {
        const updatedOtp = [...otp];
        updatedOtp[index] = ''; // Clear the current box
        setOtp(updatedOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus(); // Move to the previous box
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };



  

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text').slice(0, length); // Get pasted data
    if (!/^\d+$/.test(pasteData)) return; // Allow only numeric paste

    const updatedOtp = pasteData.split('');
    for (let i = 0; i < length; i++) {
      updatedOtp[i] = updatedOtp[i] || '';
    }
    setOtp(updatedOtp);

    // Focus the last filled box
    inputsRef.current[Math.min(pasteData.length - 1, length - 1)]?.focus();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          style={{
            width: '50px',
            height: '50px',
            textAlign: 'center',
            fontSize: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <h1>Enter OTP</h1>
      <OtpInput length={4} />
    </div>
  );
};

export default App;
