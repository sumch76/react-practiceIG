import React,{useRef} from 'react'

const UseReference= () => {

    const inputRef=useRef(null);
    const focusInput=()=>{
      inputRef.current.focus();
      //inputRef.current.value="1000";
    }

  return (
    <div>
<input ref={inputRef} type='text'/>
<button onClick={focusInput}>FOCUS THE input</button>
      
    </div>
  )
}

export default UseReference;
