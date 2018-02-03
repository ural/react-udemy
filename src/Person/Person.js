import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.clickity} >I'm  {props.name} and I am {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} placeholder="Type New Name" value={props.name} />
        </div>
    );
};

export default Person;
