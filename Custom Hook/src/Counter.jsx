import useCounter from "./useCounter"

function Counter(){
const[count,Increment,Decrement] =useCounter()


return (
  <>
  <div>{count}</div>
  <button onClick={Increment}>Increment</button>
  <button onClick={Decrement}>Decrement</button>
  </>
)
}
export default Counter