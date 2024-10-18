import React from 'react';
import ChildComponent from "./ChildComponent";
const ParentComponent=()=>
{

  // const name="sumit";
  // const age=25;
  
  return(
    <div>

      <h1>this is parent component</h1>
      {/* <ChildComponent userName={name} userAge={age}/> */}
      <ChildComponent name="sumit" age="25"/>
      </div>

  )
}
export default ParentComponent;