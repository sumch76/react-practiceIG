//import ParentComponent from "./ParentComponent";
import './App.css'
import GrandParent from "./components/GrandParent";
import { createContext, useState } from "react";
const UserContext=createContext();
const ThemeContext=createContext();
function App() {
 
  const[user,setUser]=useState({name:"Sumit"});
  const [theme,setTheme]=useState('light')

  return (
    <>
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?
          "beige":"black"
        }}>
    <GrandParent />
        </div>

        </ThemeContext.Provider>

  
    
    </UserContext.Provider>
 
    {/* <ParentComponent/> */}
    </>
  )
}

export {UserContext}
export default App;
export {ThemeContext}