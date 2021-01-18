import React from 'react';
import './person.css'

const Person = (props) => {
  return(
    <div className = 'card'>
        <h4> {props.id}</h4>
        <h5> {props.title}</h5>
        <h6> {props.text}</h6>
    </div>
  )
}

export default Person;
