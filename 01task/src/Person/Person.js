import React from 'react'
import './Person'
const person = (props) => {
  return (
    <div className="Person">
      <h3>
        I am {props.name} and I am {props.age} years old and I am {props.value}
      </h3>
      <p onClick={props.press}>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  )
}

export default person
