import { useContext } from 'react';
import React from  'react'
import { UserContext } from '../App';

const Child = () => {
    const user=useContext(UserContext);
  return (
    <div>
        data:{user.name}
      
    </div>
  )
}

export default Child;
