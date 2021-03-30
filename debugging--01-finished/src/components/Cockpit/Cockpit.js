import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('CockPit UseEffect')

    return () => {
      console.log('Cockpit cleaning')
    }
  })
  let btnClass = ''
  if (props.show) {
    btnClass = classes.Red
  }
  const assignedClasses = []
  if (props.p.length <= 2) {
    assignedClasses.push(classes.red) // classes = ['red']
  }
  if (props.p.length <= 1) {
    assignedClasses.push(classes.bold) // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.click}>
        Toggle Persons
      </button>
    </div>
  )
}

export default React.memo(Cockpit)
