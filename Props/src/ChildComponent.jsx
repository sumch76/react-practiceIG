import React from 'react';
const ChildComponent = (props)=> {
  return (
    <div>
      <h2>child component </h2>
      <p> name : {props.name}</p>
      <p> age :{props.age}</p>
    </div>
  );
};

export default ChildComponent;
