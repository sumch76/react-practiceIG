import useCounter from './useCounter'
import './App.css'

function App() {
  const[count,Increment,Decrement] =useCounter()


  return (
    <>
    <div>{count}</div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
