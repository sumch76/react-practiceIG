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
