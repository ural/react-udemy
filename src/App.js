import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sup from './sup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

            <Sup name="Bro !!!"> WHAT'S the HELL </Sup>
            <Sup name="Brothah"> this is coming from this.props.children of sup.js </Sup>

        </p>
      </div>
    );
  }
}

export default App;
