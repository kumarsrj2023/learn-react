
import React, { useState } from 'react'
import './App.css'
import UserCard from './UserCard'

function App() {
  const data = [
    {name: 'John', age: 36, email: 'jhon@gmail.com'},
    {name: 'Jane', age: 30, email: 'jane@gmail.com'},
    {name: 'Tom', age: 40, email: 'tom@gmail.com'},
    {name: 'Alice', age: 28, email: 'alice@gmail.com'},
    {name: 'Bob', age: 32, email: 'bob@gmail.com'},
  ];

  const [title, setTitle] = useState("User list");

  function updateTitle() {
    setTitle("User list cards")
  }

  
  return (
    <>
    <h1>{title}</h1>
    <hr/>

    <button onClick={updateTitle}>Update Title</button>

    {/* Loop through the data array and render a UserCard component for each user */}

   {
    data.map((data, index) => (
      <UserCard
      key={index}
      title=""
      name={data.name}
      age={data.age}
      email={data.email} />
    ))
   }
   </>
  )
}

export default App
