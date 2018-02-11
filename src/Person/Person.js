import React from 'react';
//import Radium from 'radium';
import './person.css';

const Person = (props) => {


    const randomN = Math.round(Math.random() * 10);
/*
    if (randomN > 7 ) {
        console.log(randomN);
        throw new Error("What's going ON?????");
    }
*/

    return (
        <div className="person">
            <p onClick={props.clickity} >I&#39;m  {props.name} and I am {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} placeholder="Type New Name" />
            <hr/>
            <span>
                random number: {randomN}
            </span>
        </div>
        );
};

export default Person;
