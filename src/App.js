import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sup from './sup';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
          { name: 'Партнер', age: 'ОГО-ГО...' },
          { name: 'Zoya', age: 22 },
          { name: 'Gop', age: 33 }
      ],
        testState: "testState Value"

    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 12 },
                { name: 'switch name = ZOJKA', age: 12 },
                { name: 'switch name = GOPniK', age: 53 }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 993  },
                { name: 'onChange name = Default Name', age: 12 },
                { name: event.target.value, age: 53 }
            ]
        });
    };

  render() {

    const testStyle = {
      backgroundColor: '#478',
      font: "serif",
      fontSize: '14px',
      fontWeight: 600,
      color: '#efefef',
      padding: '20px 0'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" style={testStyle}>
            <Sup name="Bro !!!"> WHAT'S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>
        </div>
          <hr/>
        <div>
            <button className="btn btn-lg" onClick={() => this.switchNameHandler('Name form Button')} >Switch Name</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                changed={this.nameChangedHandler}
            />

            <span className="divider">
                <hr/>
            </span>
            <Person
               clickity={() => this.switchNameHandler('WHO AM I ?')}
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
            />
            <Person
                changed={this.nameChangedHandler}
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} >   {this.state.testState} </Person>
        </div>
      </div>
    );
  }
}

export default App;
