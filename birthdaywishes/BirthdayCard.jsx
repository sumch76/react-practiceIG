import React from 'react';

const BirthdayCard = ({name}) => {
    const wishes=[
        `Happy Birthday, ${name}! 🎉 Wishing you all the happiness and success!`,
        `Cheers to you, ${name}! 🥳 May your day be filled with love and laughter.`,
        `Dear ${name}, have a fantastic birthday! 🎂 Stay blessed always!`,
    ];
  return (
    <div className='card-container'>
        {wishes.map((wishes,index)=>(
            <div className='card' key={index}>
                <h2>{wishes}</h2>
            </div>

        ))}
      
    </div>
  )
};

export default BirthdayCard;
