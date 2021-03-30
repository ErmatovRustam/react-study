import React from 'react'

const Task = (props) => {
    return (
        <div className='task'>
            <h1>{ props.id + 1}</h1>
            <h2>{props.name}</h2>
            <h6>{props.date}</h6>
            <button onClick = {() => props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default Task
