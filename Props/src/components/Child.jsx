import { useContext } from 'react';
import React from  'react'
import { ThemeContext, UserContext } from '../App';

const Child = () => {
    const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);
    const handleTheme=()=>{
      if(theme==='light')
        setTheme('dark')
      else
      setTheme('light')
    }
  return (
    <div>
       
        <button onClick={handleTheme}>Toggle Theme</button>
        data:{user.name}
       
    </div>
  )
}

export default Child;
