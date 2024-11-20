import React, { useState } from 'react';
function App() {
  const [step, setStep] = useState(1);
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const generateOtp = '1234';

  const handleOtp = () => {
    if (mobileNo.length === 10) {
      alert(`otp sent : ${generateOtp}`);
      setStep(2);
    } else {
      alert('enter a valid 10 digit mobile no');
    }
  };
  //handle otp
  const handleOtpChange = (value, index) => {
    const updateOtp = [...otp];
    updateOtp[index] = value.slice(-1);
    setOtp(updateOtp);
    //move focus to next input box if it is not last one
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
      
    }
  };

  const verifyOtp = () => {
    if (otp.join('') === generateOtp) {
      alert('login successfull');
    } else {
      alert('invalid otp');
      setOtp(["","","",""]);//ye otp ke box ko reset krne ke liyee
      document.getElementById("otp-0").focus();
      //doabra 0 index me focus lane keee liyee
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>login with otp</h1>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="enter your 10 digit mobile no"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            maxLength="10"
          />
          <button onClick={handleOtp}>Send Otp</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                maxLength="1"
               style={{
                 width:"40px",
                 height:"40px",
                 textAlign:"center",
                 fontSize:"18px",
               }} 
              />
            ))}
          </div>
          <button
            onClick={verifyOtp}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: '#28A745',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            verify otp
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
