import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor ", props);
  }
  componentWillMount() {
    console.log("[Persons.js] Inside ComponentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] from inside componentDIDMout()");
  }
// component update
  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js  !!!");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ UPDATE Persons.js ] shouldComponentUpd ?  ", nextProps);
    return nextProps.persons !== this.props.persons;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[ UPDATE !!!] from componentWILLup", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[ UPDATE !!! ] component DID mount ");
  }

  render () {
    console.log("[Persons.js] inside render()  ", this.props);
    return this.props.persons.map((person, index) => {
        return <Person
          clickity={() => this.props.clicked(index)}
          key={person.id}
          name={person.name}
          age={person.age}
          changedName={(event) => this.props.changed(event, person.id)}
        />
      });//end map()
  }
}

export default Persons;
