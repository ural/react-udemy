import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sup from './sup';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
          { name: 'Zoya', age: 22 },
          { name: 'Gop', age: 33 }
      ]
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

            <Sup name="Bro !!!"> WHAT'S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>
        </div>
        <div>
            <button className="btn btn-lg">Switch Name</button>
            <Person name="Pardner" age="WOW" />
            <Person name="Партнер" age="ОГОГО...">Who is this Person  </Person>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        </div>
      </div>
    );
  }
}

export default App;
