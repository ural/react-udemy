import React from 'react';
//import Radium from 'radium';
import './person.css';

const Person = (props) => {

/*
    const pStyle = {
      '@media (min-width: 768px)': {
          background: '#af580b'
      }
    };
*/

    return (
        <div className="person">
            <p onClick={props.clickity} >I&#39;m  {props.name} and I am {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} placeholder="Type New Name" />
        </div>
        );
};

export default Person;
