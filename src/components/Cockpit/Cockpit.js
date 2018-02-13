import React from 'react';

import cockStyles from './Cockpit.css';

const cockpit = (props) => {

  const btnStyle = {
    backgroundColor: '#f09100',
    Font: "serif",
    fontSize: '14px',
    color: '#efefef',
    padding: '20px 40px'
  };

  // Dynamic Styles
  let classNames = [];
  classNames.push(cockStyles.loadED);

  //let btnClass = '';
  //const btnClass = cockStyles.red;

  if (props.persons.length || props.persons.length === 0) {
    classNames.push(cockStyles.red);
  }
  if (props.persons.length <= 2) {
    classNames.push(cockStyles.black);
  }
  if (!props.showPersons) {
    classNames.shift();
    btnStyle.backgroundColor = '#09f';
  }

    return (

    <div className={cockStyles.Cockpit}>
      <h2 className={classNames.join(' ')}>Toggle who&#39;s there ...</h2>
      <button className={cockStyles["ma-btn-lg"]}
        onClick={props.clicked}>
        Show Hide
      </button>
      <h3>{props.appTitle}</h3>
      <p style={btnStyle}>btnStyle from Cockpit.js | <strong>classNames {classNames} </strong></p>
    </div>
  );
};

export default cockpit;
