import React from 'react';
class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+'child constructor');
  }
  componentDidMount()
  {
    console.log(this.props.name+'component did mount(child)');
  }
  render() {
    const { name, location } = this.props;
    console.log(name+'child class render');
    return (
      <div className="class">
        <h2>name:{name}</h2>
        {/* <h2> location:{this.props.location} </h2> */}
        <h2> location:{location} </h2>
      </div>
    );
  }
}
export default ClassComp;
