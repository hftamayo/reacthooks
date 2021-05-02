import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person'


class App extends Component() {
  state = {
    persons: [
      {id: '001', name: 'Lionel Messi', age: 34},
      {id: '002', name: 'Ousmane Dembele', age: 21},      
      {id: '003', name: 'Ansu Fati', age: 18},      
    ],
    otherState: 'waiting for more lineups',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
  }

  const person = {
    ...this.state.person[personIndex]
  }

}
export default App;
