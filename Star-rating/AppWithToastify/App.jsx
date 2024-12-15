import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ noOfStars = 7 }) => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
    toast.info(`you rated ${currentIndex + 1} out of ${noOfStars}❤️‍🔥❤️‍🔥`, {
      position: 'bottom-right',
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  const handleMouseHover = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      <ToastContainer />
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar
          key={index}
          size={32}
          const
          color={index <= (hover || rating) ? 'green' : 'black'}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseHover(index)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </div>
  );
};

export default App;

//installl npm i toastify
//import {ToastContainer,toast} from "react-toastify"
//import 'react-toastify/dist/ReactToastify.css';
//add <ToastContainer/> in app.jsx inside return where you want to render
//toast.info(`message`,{postiton:top_right,
//other prop})