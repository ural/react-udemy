import React from 'react';

const UserInput = (props) => {

    return (
        <div>
            <p>Turn-key aggregate networkeffects killer social weblogs metrics best-of-breed embedded vortals, scale reinvent blogospheres innovate; e-enable e-services, disintermediate." </p>
            <p>Web services, visionary, transparent reintermediate target empower: enable dynamic infrastructures scale sticky create real-time.</p>
            <hr/>
            <div className="show_u-name">
                The default username is:  {props.u_name}
            </div>
            <div className="input-fields">
            <input type="text" value={props.u_name} onChange={props.u_nameChange} defaultValue={props.u_name}/>
{/*
            <input type="submit" defaultValue="Change User Name" onClick={props.u_nameChange} />
*/}
            </div>
        </div>
    );

};

export default UserInput;
