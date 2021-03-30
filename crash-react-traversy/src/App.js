import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import Button from './components/Button'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Shower',
      day: 'Sunday'
    },
    {
      id: 2,
      name: 'Soccer',
      day: 'Friday'
    },
    {
      id: 3,
      name: 'Reading',
      day: 'Monday'
    }
  ]);

  let newTask = {};

  const inputHandler = (e) => {
    console.log('Entering ' + e.target.value)
    newTask = {
        name: e.target.value,
        day: 'Tuesday'
    };
  }

  const btnHandler = () => {
    const newArr = [newTask, ...tasks]
    setTasks(newArr)
    }
  
  const deleteHandler = (id) => {
    setTasks(tasks.filter((el, idx) => idx !== id)
      );
      console.log('Deleted ' + id + ' ' + tasks[id].name)
  }
  
  return (
    <div className="App">
      <Header title="Hello " />
      <input onChange={inputHandler} />
      <Button onClick={ btnHandler} color = 'green' name = 'Add '/>
      <Tasks tasks={tasks} delete={deleteHandler}/>
      <Footer />
    </div>
  );
}

export default App;
