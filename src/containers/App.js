import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';

import Sup from '../sup';
import Persons from '../components/Persons/persons';
import UserOutput from '../components/username/UserOutput';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cock from '../components/Cockpit/Cockpit';

import appStyles from './App.css';
import logo from '../logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor ", props);
  }
  componentWillMount() {
    console.log("[App.js] Inside ComponentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] from inside componentDIDMout()");
  }
// UPDATES
/*
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ App.js Persons.js ] shouldComponentUpd ?  ");
    return nextProps.persons !== this.props.persons;
  }
*/
  componentWillUpdate(nextProps, nextState) {
    console.log("[ App.js !!!] from componentWILLup", nextProps, nextState);
  }
  componentDidUpdate(nextProps) {
    console.log("[ App.js !!! ] component DID UPdate ", nextProps);
  }

  state = {
    persons: [
      {id: 'odin', name: 'Партнер', age: 'ОГО-ГО...'},
      {id: 'dva', name: 'Zoya', age: 22},
      {id: 'tri', name: 'Gop', age: 33},
      {id: 'Последний', name: 'Герой', age: 48}
    ],
    testState: "testState Value",
    showPersons: false

  };

  nameChangedHandler = (event, id) => {
    // get the index of modified person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // create a copy of global persons object and assign it to reference object
    const person = {
      ...this.state.persons[personIndex]
    };
    // ^^ assign name value to person object above, the value is from input field
    person.name = event.target.value;
    // create copy of global persons object
    const personsCopy = [...this.state.persons];
    // and assign to selected person its new name
    personsCopy[personIndex] = person;

    person.age = person.age + 1;

    this.setState({
      persons: personsCopy
    });
  };

  deletePersonHandler = (personIndex) => {
    //const deletePersons = this.state.persons.slice();
    const deletePersons = [...this.state.persons];
    deletePersons.splice(personIndex, 1);
    this.setState({persons: deletePersons});
  };

  togglePersonHandler = () => {

    const dontShow = this.state.showPersons;
    this.setState({
      showPersons: !dontShow
    });
  };

  render() {

    const testStyle = {
      backgroundColor: '#478',
      Font: "serif",
      fontSize: '14px',
      color: '#efefef',
      padding: '20px 0'
    };

    let persons = null;
    if (this.state.showPersons) {

      persons = (
        <div className={appStyles.persons_Holder}>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}

          />
        </div>
      );

      //   btnStyle.backgroundColor = '#09f';
      testStyle.fontSize = '0.5rem';

    }// end if showPersons

    // END Dynamic Styles

    return (
      // Radium Staff /*<StyleRoot>*/

      <div className={appStyles.App} id="App_main_wrap">
        <header className={appStyles.App_header}>
          <img src={logo} className={appStyles["App-logo"]} alt="logo"/>
          <h1 className={appStyles['App-title']}>Welcome to React</h1>
        </header>
        {/* END HEADER  */}
        <div className={appStyles["main-content-wrap"]}>
          <UserOutput/>
          <hr/>
          <div className={appStyles["App-intro"]} style={testStyle}>
            <Sup name="Bro !!!"> WHAT&#39;S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>
          </div>
          <hr/>
          {/* toggle Persons*/}
          <Cock showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonHandler}
                   appTitle={this.props.title}
          />
          {/* END toggle Persons*/}

          {persons}

        </div>
        {/* END main-content-main */}

        {/* footer* */}
        <div className={appStyles.footer}>
          <p className="para"> FOOTER </p>
        </div>
      </div>

      // Radium Staff /*</StyleRoot>*/
    );
  }
}

export default App;
