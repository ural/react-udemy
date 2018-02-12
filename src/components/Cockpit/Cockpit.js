import React from 'react';

import appStyles from './Cockpit.css';

const cockpit = (props) => {

  // Dynamic Styles
  let classNames = ['loadED'];

  //let btnClass = '';
  //const btnClass = appStyles.red;

  if (props.persons.length || props.persons.length === 0) {
    classNames.push(appStyles.red);
  }
  if (props.persons.length <= 2) {
    classNames.push(appStyles.black);
  }
  if (!props.showPersons) {
    classNames.pop();
  }

  return (

    <div className={appStyles.Cockpit}>
      <h2 className={classNames.join(' ')}>Toggle who&#39;s there ...</h2>

      <button
      onClick={props.clicked}
      >Show Hide</button>

      {/*<button className={appStyles["ma-btn-lg"]}
        onClick={this.togglePersonHandler}
        style={btnClass}
      >Show Hide</button>*/}
    </div>
  );
};

export default cockpit;
