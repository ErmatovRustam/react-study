import './App.css'
import Hello from './components/Hello.jsx'
import Welcome from './components/Welcome.jsx'
import Counter from './components/Counter.jsx'

function App() {
  return (
    <div className="App">
      <Counter />
      <Hello  />
      <Welcome name = 'Rus'/>
    </div>
  )
}

export default App
