import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'key1', name: 'Max', age: 30},
      {id: 'key2', name: 'Manu', age: 29},
      {id: 'key3', name: 'brandon', age: 20}
    ],
    showPersons: false    
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // ES6 
    const persons = [...this.state.persons];
    // splice is to delete the current index
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  

  render() {

    let persons = null;
  
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      );
    }
          
    return (
        <div className={classes.App}>
            <Cockpit 
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
              showPersons={this.state.showPersons}/>
            {persons}
        </div>
      );
  }
}

export default App;


