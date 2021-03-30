import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons GetDerive ')
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons ShouldUpdate ')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons Get Snapshot Persons')
    return { message: 'snapshot ' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons component Did Update Persons')
  }

  componentWillUnmount() {
    console.log('Persons Component WillUNmount')
  }

  render() {
    console.log('Persons render')
    return this.props.persons.map((person, index) => {
      return (
        // <ErrorBoundary key={person.id}>
        <Person
          key={index}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        />
        //</ErrorBoundary>
      )
    })
  }
}

export default Persons
