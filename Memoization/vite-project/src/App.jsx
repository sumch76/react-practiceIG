import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[input,setInput]=useState(0);
  function expensiveTask(num)
  {
    console.log("inside expensive task");
    for(let i=0;i<=100000000;i++)
    {
      return num*2;
    }
  }
  
  let doubleValue=useMemo(()=>expensiveTask(input),[input]);

  return (
    <>
    <button onClick={()=>setCount(count+1)}>
      increment</button>
    <div>cOUNT :{count}</div>
    <input type="number"
    placeholder='enternumber'
    value={input}
    onChange={(e)=>setInput(e.target.value)}/>
    <div>Double Value"{doubleValue}</div>
    </>
  )
}

export default App
