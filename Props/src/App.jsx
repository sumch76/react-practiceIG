//import ParentComponent from "./ParentComponent";
import './App.css'
import GrandParent from "./components/GrandParent";
import { createContext, useState } from "react";
const UserContext=createContext();
function App() {
 
  const[user,setUser]=useState({name:"Sumit"});

  return (
    <>
    <UserContext.Provider value={user}>
      <GrandParent />
    </UserContext.Provider>
 
    {/* <ParentComponent/> */}
    </>
  )
}

export {UserContext}
export default App;