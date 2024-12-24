import React, {useState} from "react";

const App=()=>
{
  const[search,setSearch]=useState("");
  const[items]=useState(["apple","apply","date","guava","lemon","orange"]);

  const filteredItems=items.filter((item)=>item.includes(search));
  return(
    <>
    <input type="text"
    placeholder="enter something"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    <ul>
      {filteredItems.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
  )
};

export default App;