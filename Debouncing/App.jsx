//debouncing is a technique used to control the frequency of a function's execution.
//it ensures that a function is executed only after a certain period of inactivity.

//suppose if a user is typing in a  search bar then debouncing helps reduce the no of unnecessary Api calls


// Debouncing: Ensures the function is called once after a delay.
// Throttling: Ensures the function is called at most once within a fixed interval

import React, { useState,useEffect } from 'react'

const App = () => {

    const[InputValue,setInputValue]=useState("");
    const[debounce,setDebounce]=useState("");
    useEffect(()=>
    {
        const timer=setTimeout(()=>
        {
            setDebounce(InputValue);
        },500);
        return ()=>clearTimeout(timer);
    },[InputValue])
  return (
    <div>
        <input type="text"
        placeholder="enter your text"
        value={InputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <p>DEbounce value :{debounce}</p>
      
    </div>
  );
}

export default App;

//Without debouncing: Immediate response to every change, resulting in multiple API calls or updates.
//With debouncing: Waits until the user stops typing (e.g., 500ms), then processes the update once.
