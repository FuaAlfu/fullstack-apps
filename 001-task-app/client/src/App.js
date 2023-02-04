import { useState } from 'react'
import ListHolder from './components/ListHolder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ListHolder listName={'tick list'}/>
    </div>
  )
}

export default App
