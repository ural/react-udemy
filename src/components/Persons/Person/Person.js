import React from 'react';
//import Radium from 'radium';
import './person.css';

/*const Person = (props) => {*/
class Person extends React.Component {

  constructor(props) {
    super(props);
    console.log("[Persons_SINGULARjs] Inside Constructor ", props);
  }
  componentWillMount() {
    console.log("[Persons_SINGULARjs] Inside ComponentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons_SINGULARjs] from inside componentDIDMout()");
  }

  render () {
    console.log("[Persons_SINGULARjs] inside render()  ", this.props);
     // const randomN = Math.round(Math.random() * 10);
      return (
        <div className="person">
          <p onClick={this.props.clickity} >I&#39;m  {this.props.name} and I am {this.props.age} years old.</p>
          <p> {this.props.children} </p>
          <input type="text" onChange={this.props.changedName} placeholder="Type New Name" />
          <hr/>
          <span>
               {/* random number: {randomN}*/}
            </span>
        </div>
      );

    }
}

export default Person;
