import { useState } from 'react'
import './App.css'
function App() {
  const[words,setWords]=useState("");
  const[paragraph,setParagraph]=useState("");

  function handleGenerate()
  {
    const sampleWords="Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
    let result="";
     // Add words from sampleWords up to the entered count
    for(let i=0;i<words;i++)
    {
         // Repeat the sample text if the word count exceeds its length
      result=result+sampleWords[i%sampleWords.length]+ " ";
    }
    setParagraph(result.trim());
  }
 
return(
  <>
  <h1>para generator</h1>
  <input 
  type="number"
  placeholder="enter no of words"
  value={words}
  onChange={(e)=>setWords(Number(e.target.value))}/>
  <button onClick={handleGenerate}>generate</button>
  <p>{paragraph}</p>
 
  </> 
)
}


export default App;
