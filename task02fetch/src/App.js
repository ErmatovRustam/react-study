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

      handleDelete = (event) =>{
          console.log(event + 'event')
          const temp = this.state.people;
          temp.splice(event,1);
      this.setState({
        people: temp
      })
  // this.handleDelete = this.handleDelete.bind(this);
    }
    handleAdd = (event) =>{
      
    this.setState({
      people: temp
    })
// this.handleDelete = this.handleDelete.bind(this);
  }

  render(){
        // console.log(this.state.people)
      return (
        <div className="App">
        {this.state.loading || !this.state.people ? (<div> Loading </div> ) :
            (<div className = 'cards'>
              {
                  this.state.people.map((el, ind)=>{
                    return(
                      <div key = {ind}>
                      <Person key = {this.ind} id = {el.id } title = {el.title} text = {el.body}
                       delete = {() => this.handleDelete(ind)}  add = {() => this.handleAdd(ind)}/>
                      </div>
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
