import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num: 0
        }
    }
     increase = () => {
         this.setState({
            num: this.state.num + 1
        })
     }
    
    decrease = () => {
         this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.decrease}>-</button>
                {this.state.num}
                <button onClick = {this.increase}>+</button>
            </div>
        )
    }
}

export default Counter
