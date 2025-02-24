
import React, { useState } from 'react'
import './App.css'
import FormHandler from './FormHandler'
function App() {

  const [title, setTitle] = useState()

  return (
    <>
      <FormHandler />
    </>
  )
}

export default App
