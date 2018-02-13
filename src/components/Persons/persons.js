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
