
import './App.css'
import { ClassComponent } from './ClassComponent'
import { useState } from 'react';
function App() {

  const [title, setTitle] = useState('ClassComponent');
  const handleClick = () => {
    setTitle('Updated Title');
  }

  return (
    <>
      <ClassComponent title={title} handleClick={handleClick} />

    </>
  )
}

export default App
