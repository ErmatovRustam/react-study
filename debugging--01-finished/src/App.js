import React, { Component } from 'react'
import classes from './App.css'
import Persons from './components/Persons/Persons'
import Cockpit from './components/Cockpit/Cockpit'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    console.log('App - constructor')
    super(props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App GetDerive ', props)
    return state;
  }

  componentDidMount() {
    console.log('App Component Did mount')
  }

  shouldComponentUpdate(nextProps, nextUpdate) {
    console.log('App should Update');
    return true;
  }

  componentDidUpdate() {
    console.log('App did update')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log('App render')
    let persons = null
    if (this.state.showPersons) {
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
      )
    }

   

    return (
      <div className={classes.App}>
        <Cockpit p={this.state.persons} click = {this.togglePersonsHandler} show = {this.state.showPersons} />
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
