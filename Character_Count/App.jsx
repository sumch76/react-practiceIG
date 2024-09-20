import { useState } from "react"

export default function App() {
	const[count,setCount]=useState(0);

	const handleCount=(e)=>
	{
setCount(e.target.value.length);
	}
	return (
		
		<>
			<h1>Hello there!</h1>
			<textarea id="textInput" onChange={handleCount}></textarea>
			{/* we can also directly put in the one line without defining  function */}
			{/* textarea id="textarea"onChange={(e)=>setCount(e.target.value.length)}</textarea> */}

			<div id="count">{count}</div>
		</>
	);
}
