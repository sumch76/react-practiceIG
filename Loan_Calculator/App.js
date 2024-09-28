import React,{useState} from "react";
export default function App()
{
const[totalCost,setTotalCost]=useState(0);
const[noOfInterval,setNoOfInterval]=useState(0);
const[emi,setEmi]=useState(null);

const handleCalculate=()=>{
    const updatedEmi=totalCost/noOfInterval;
    setEmi(updatedEmi.toFixed(2));
};
return(

    <>
    <div className="container">
        <h1>emi calculator</h1>
        <input id="totalCost"
        type="number"
        placeholder="enter loan amount"
        className=" border border-2 border-black"
        onChange={(e)=>setTotalCost(Number(e.target.value))}
        />

<input id="numberOfIntervals"
type="number"
placeholder="enter no of payments"
className="border border-2 border-black"
onChange={(e)=>setNoOfInterval(Number(e.target.value))}/>
  
  <button id="calculate" onClick={handleCalculate}>Calculate</button>
  <div id="outpuut">
    {emi!=null ? `EMI: ${emi}`:"enter value to calculate"}
  </div>

    </div>
    </>

);
}