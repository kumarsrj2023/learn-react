import { useState } from 'react'
import './App.css'
import ClickEvent from './ClickEvent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickEvent />
    </>
  )
}

export default App
