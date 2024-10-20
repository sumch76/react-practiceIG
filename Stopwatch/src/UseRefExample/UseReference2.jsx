import React from 'react'
import { useRef ,useState} from 'react';

const UseReference2 = () => {
    const[second,setSecond]=useState(0);//state for timer
    const timeRef=useRef(null);

    const startTimer=()=>
    {
        if(timeRef.current!=null)
            return;
        //if timr is already running do nothing
        timeRef.current=setInterval(()=>
        {
            setSecond(prev=>prev+1);  //increase  timer in each second
        },1000);
    };
    const stopTimer=()=>{
        clearInterval(timeRef.current); //stop timer
        timeRef.current=null; //reset ref
    }

    const resetTimer=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
        setSecond(0);  //reset timer
    };
  return (
    <div>
        <h1>Timer:{second}</h1>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      
    </div>
  )
}

export default UseReference2;
