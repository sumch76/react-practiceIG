import React, { useState } from 'react'
import {FaStar} from "react-icons/fa";

const App = ({noOfStars=5}) => {
    const[hover,setHover]=useState(0);
    const[rating,setRating]=useState(0);

    const handleClick=(currentIndex)=>
    {
     setRating(currentIndex);
    }

    const handleMouseHover=(currentIndex)=>
    {
        setHover(currentIndex);
    }
    const handleMouseLeave=()=>
    {
        setHover(rating);
    }

  return (
    <div className='star-rating'>
        {[...Array(noOfStars)].map((_,index)=>
        <FaStar
        key={index}
        size={32}
        const color={index<=(hover||rating)? "green":"black"}
        onClick={()=>handleClick(index)}
        onMouseMove={()=>handleMouseHover(index)}
        onMouseLeave={()=>handleMouseLeave()}
        />)}

      
    </div>
  )
}

export default App
