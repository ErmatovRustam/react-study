import React, {useState} from 'react';
import './person.css'

const Person = (props) => {
  return(
    <div className = 'card' key = {props.id}>
        <h4> {props.id}</h4>
        <h5> {props.title}</h5>
        <h6> {props.text}</h6>
        <button onClick = {props.delete}>Delete</button>
        <input  onChange = />
        <button onClick = {props.add}>Add Text</button>
    </div>
  )
}

export default Person;
