import { useState } from 'react'
import './App.css'
import ClickEvent from './ClickEvent'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClickEvent /> */}
      <Counter />
    </>
  )
}

export default App
