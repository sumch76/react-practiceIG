// we will be using the debounce function from use-debounce

import { useState } from 'react';
import {useDebounce} from 'use-debounce';
const App2=()=>
{
    const[InputValue,setInputValue]=useState("");
    const[debounce]=useDebounce(InputValue,500);

    const handleChange=(e)=>
    {
        const value=e.target.value;
        setInputValue(value);
        console.log(`Debounced Value: ${debounce}`); // will be logged after 500ms of no input
    }
    return(
        <div>
            <input type="text" placeholder="type here"
            value={InputValue}
            onChange={handleChange}
            />
            <p>{debounce}</p>
        </div>

    )
}
export default App2;