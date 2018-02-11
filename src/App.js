import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';

import appStyles from './App.css';
import logo from './logo.svg';

import Sup from './sup';
import Person from './Person/Person';
import UserOutput from './username/UserOutput';

class App extends Component {

    state = {
      persons: [
          {id: 'odin', name: 'Партнер', age: 'ОГО-ГО...' },
          {id: 'dva', name: 'Zoya', age: 22 },
          {id: 'tri', name: 'Gop', age: 33 },
          {id: 'Последний', name: 'Герой', age: 48 }
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

        this.setState({
            persons: personsCopy
        });
    };

    deletePersonHandler = (personIndex) => {
      //const deletePersons = this.state.persons.slice();
      const deletePersons = [...this.state.persons];
      deletePersons.splice(personIndex, 1);
      this.setState({ persons: deletePersons });
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

      const btnStyle = {
          backgroundColor: '#f09100',
          Font: "serif",
          fontSize: '14px',
          color: '#efefef',
          padding: '20px 40px'
      };

      let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div className="personsHolder">
              {this.state.persons.map((person, index) => {
                  return <Person
                    clickity={() => this.deletePersonHandler(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
                })}
            </div>
        );
        btnStyle.backgroundColor = '#09f';
        testStyle.fontSize = '0.5rem';


    }// end if showPersons

    // Dynamic Styles
      let classNames = [];
      if (this.state.persons.length || this.state.persons.length === 0) {
         /*classNames.push('red');*/
         classNames.push(appStyles.red);
      }
      if (this.state.persons.length <= 2) {
          /*classNames.push('black');*/
          classNames.push(appStyles.black);
      }
      if (!this.state.showPersons) {
          classNames.shift();
      }
       // END Dynamic Styles

  return (
      // Radium Staff /*<StyleRoot>*/

      <div className={appStyles.App} id="App_main_wrap">
        <header className={appStyles.App_header}>
          <img src={logo} className={appStyles["App-logo"]} alt="logo" />
          <h1 className={classNames.join(' ')}>Welcome to React</h1>
        </header>
          <UserOutput/>
          <hr/>
        <div className={appStyles["App-intro"]} style={testStyle}>
            <Sup name="Bro !!!"> WHAT&#39;S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>
        </div>
          <hr/>
            <button className={appStyles["ma-btn-lg"]} onClick={this.togglePersonHandler}  style={btnStyle}>Show Hide</button>
          {/* toggle Persons*/}
          { persons }
          {/* END toggle Persons*/}
          <hr/>
          {/* footer* */}
          <div className={appStyles.footer}>
              <hr />
              <p className={appStyles.black}> FOOTER </p>
          </div>
      </div>

      // Radium Staff /*</StyleRoot>*/
    );
  }
}

export default App;
