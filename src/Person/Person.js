import React from 'react';
import './person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.clickity} >I&#39;m  {props.name} and I am {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} placeholder="Type New Name" />
        </div>
);
};

export default Person;
