import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount()
  {
    console.log('component did mount(parent)');
  }



  render(){

    console.log("parent render");
    return (
      <div>
      {/* <FunctionalComp
      name={'sumit chaubey(functional)'}
      location={'uttarakhand'}
    /> */}
    <ClassComp name={'harkirat(class)'} location={'uttarakhand'} />
    <ClassComp name={'sumit(class)'} location={'uttarakhand'} />
    </div>
    )
    
    };
}

export default App;

//if one child

//parent constructor
//  parent render
//  child constructor
//  child class render
//  component did mount(child)
// component did mount(parent)


//if two child
// - parent constructor
//  - parent render
// - harkirat(class)child constructor
//  - harkirat(class)child class render
// - sumit(class)child constructor
//  harkirat(class)component did mount(child)
// sumit(class)component did mount(child)
// -  component did mount(parent)