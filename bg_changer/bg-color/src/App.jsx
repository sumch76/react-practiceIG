import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("white");

  return (
<div className="container" style={{backgroundColor:color}}
><div className='color-palate'>
  <button className='red' onClick={()=>setColor("red")}>Red
  </button>
  <button className='yellow' onClick={()=>setColor("yellow")}>Yellow
  </button>
  <button className='blue' onClick={()=>setColor("blue")}>Blue
  </button>
  <button className='green' onClick={()=>setColor("green")}>Green
  </button>
</div>
</div>
  )
}

export default App
