import React, {Component} from 'react';

class Hello extends Component{
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor",
            btnMessage: "Subscribe",
            unsubs: true
        }
    }

    handleClick = () => {
          this.state.unsubs ?
        this.setState({
            message: 'Thanks',
            btnMessage: "Unsubscribe",
            unsubs : !this.state.unsubs
        }) :
              this.setState({
            message: 'Please subscribe',
                  btnMessage: "subscribe",
            unsubs : !this.state.unsubs
            
          })
      }    

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.handleClick()}>{this.state.btnMessage}</button>
            </div>
        )
    }
}
export default Hello