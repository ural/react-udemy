import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

/*
        this.setState({
            persons: [
                { name: event.target.value, age: 993  },
                { name: 'onChange name = Default Name', age: 12 },
                { name: event.target.value, age: 53 }
            ]
        });
*/
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
      font: "serif",
      fontSize: '14px',
      color: '#efefef',
      padding: '20px 0'
    };

      const btnStyle = {
          backgroundColor: '#f09100',
          font: "serif",
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


      let classNames = [];
      if (this.state.persons.length || this.state.persons.length === 0) {
         classNames.push('red');
      }
      if (this.state.persons.length <= 2) {
          classNames.push('black');
      }
/*
      if (this.state.persons.length <= 2) {
          classNames.unshift('black');
      }
*/
      if (!this.state.showPersons) {
          classNames.shift();
      }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className={classNames.join(' ')}>Welcome to React</h1>
        </header>
          <UserOutput/>

          <hr/>

        <div className="App-intro" style={testStyle}>
            <Sup name="Bro !!!"> WHAT&#39;S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>
        </div>

          <hr/>
            <button className="btn btn-lg" onClick={this.togglePersonHandler}  style={btnStyle}>Show Hide</button>
          {/* toggle Persons*/}
          { persons }
          {/* END toggle Persons*/}

          <hr/>
      </div>
    );
  }
}

export default App;
