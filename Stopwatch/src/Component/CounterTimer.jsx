import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import "./CounterTimer.css"

function CounterTimer() {
  const[time,setTime]=useState(0);
  const[isActive,setActive]=useState(false);
  const[isPause,setPause]=useState(true);
  const intervalRef=useRef(null);

  const handleInput=(e)=>{
    setTime(parseInt(e.target.value*60))
  }
  //changing minute into second when user input the value in  minute

function formatTime(){
  const min=String(Math.floor(time/60)).padStart(2,'0');
  const sec=String(time%60).padStart(2,'0');
  return `${min}:${sec}`;
}

function handleStart()
{
  setActive(true);
  setPause(false);

}
useEffect(()=>{
  if(isActive && !isPause && time>0)
  {
    intervalRef.current=setInterval(()=>
    {
      setTime((prev)=>prev-1)
    },1000)
  }
  else if(time===0)
  {
    clearInterval(intervalRef.current);
    setActive(false);
    alert("time is  up");
  }

  return()=>clearInterval(intervalRef.current);
},[isActive,isPause,time]);

function handlePause(){
setPause(!isPause);

}

const handleReset=()=>
{
  clearInterval(intervalRef.current);
  setActive(false);
  setPause(false);
  setTime(0);
}

  return (
    <div className='countdown-timer'>
      <h1>Countdown Timer</h1>
      <div className="timer-display">
        <input type='number' placeholder="enter time in minutes"
        onChange={handleInput}/>
        <div>{formatTime()}</div>
      
      </div>
      <div className="timer-controls">
        <button onClick={handleStart} disabled={isActive && !isPause}>Start</button>
        <button onClick={handlePause} disabled={!isActive}>{isPause?'Resume':'Pause'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    
    </div>
  )
}

export default CounterTimer
