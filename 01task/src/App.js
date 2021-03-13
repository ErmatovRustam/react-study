import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'
import './Person/Person.css'

const app = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personState, setPerState] = useState({
    persons: [
      { name: 'Rus', age: 24 },
      { name: 'Mika', age: 23 },
      { name: 'Far', age: 9 },
    ],
    name: 'hey',
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [el, setEl] = useState('chadsfnfafaged')
  console.log(el)

  const switchNameHandler = () => {
    setPerState({
      persons: [
        { name: 'Erm', age: 24 },
        { name: 'Mika', age: 23 },
        { name: 'Far', age: 9 },
      ],
    })
  }
  const nameChangeHandler = (e) => {
    setPerState({
      persons: [
        { name: 'RUS', age: 24 },
        { name: 'Mika', age: 23 },
        { name: e.target.value, age: 9 },
      ],
    })
    console.log('changed ' + personState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        />
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
          press={switchNameHandler}
          change={nameChangeHandler}
        >
          I am inner Value
        </Person>
        <button onClick={switchNameHandler}>Click</button>
        {console.log(personState)}
      </header>
    </div>
  )
}
export default app
