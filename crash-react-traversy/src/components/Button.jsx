import React from 'react'

const Button = (props) => {
    
    return <button onClick={props.onClick} style={{ backgroundColor: props.color }} className='btn'>{props.name}</button>
}

export default Button
