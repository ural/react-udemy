import React from 'react';

import cockStyles from './Cockpit.css';

const cockpit = (props) => {

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
  }
    const btnStyle = {
        backgroundColor: '#f09100',
        Font: "serif",
        fontSize: '14px',
        color: '#efefef',
        padding: '20px 40px'
    };

    return (

    <div className={cockStyles.Cockpit}>
      <h2 className={classNames.join(' ')}>Toggle who&#39;s there ...</h2>
      <button className={cockStyles["ma-btn-lg"]}
        onClick={props.clicked}
        style={btnStyle}
      >Show Hide</button>
    </div>
  );
};

export default cockpit;
