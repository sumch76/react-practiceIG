//local storage sync with the simple counter app
import { useEffect, useState } from 'react';

const App = () => {
  const number = Number(localStorage.getItem('count'));

  const [count, setCount] = useState(number);
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <>
      <h1>counter app</h1>
      <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Count</button>
      </div>
    </>
  );
};

export default App;

//additional feature  i have added

import { useEffect, useState } from 'react';

const App2 = () => {
  const number = Number(localStorage.getItem('count'));

  const [count, setCount] = useState(number);
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const prevCount = () => {
 
    setCount((count) => count - 1);
    if (count < 1) {
      alert('no. cannot be negative');
      setCount(0);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>counter app</h1>
      <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          add count
        </button>
        <button onClick={prevCount}>sub count</button>
        <button onClick={handleReset}>Reset count</button>
      </div>
    </>
  );
};


