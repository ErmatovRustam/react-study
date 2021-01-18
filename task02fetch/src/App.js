import React, {Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
    state = {
      loading: true,
      people: null
    }

    async componentDidMount(){
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        loading: false,

        people: data
      })
    }

  render(){
    console.log(this.state.people)
      return (
        <div className="App">
        {this.state.loading || !this.state.people ? (<div> Loading </div> ) :
            (<div className = 'cards'>
              {
                  this.state.people.map((el, ind)=>{
                    return(
                      <Person id = {el.id } title = {el.title} text = {el.body} />
                    )
                  })
              }
            </div>
            )
        }
        </div>
      );
  }
}
export default App;
