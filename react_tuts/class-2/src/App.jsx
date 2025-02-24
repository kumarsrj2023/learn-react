
import React, { useState } from 'react'
import './App.css'
import Profile from './Profile'
function App() {

  const [profileTtitle, setProfileTitle] = useState('Conditional Rendering')
  const [profileData, setProfileData] = useState([
    {
      'role': 'admin',
      name: 'Admin John Doe',
      age: 25,
      email: 'adminjohndoe@example.com',
      address: '123 Main St',
    },
    {
      'role': 'guest',
      name: 'Guest',
      age: 25,
      email: 'guestjohndoe@example.com',
      address: '787 Sunst St',
    }

  ]);

  return (
    <>
      <h2 className='font-bold text-3xl text-blue-500 text-center mb-5'>Component: <span>{profileTtitle} </span></h2>
      <div className='profile-component flex gap-2'>
        {
          profileData.map((profile, index) => {
            if (profile.role === 'guest') {
              return (
                <Profile key={index} data={profile} />
              )
            } else {
              return null
            }
          })
        }
      </div>

      <button onClick={() => { setProfileTitle('Profile Rendering') }} className='text-base text-blue-500 font-medium border border-blue-300 rounded-md px-4 py-2 my-5 text-center mx-auto block cursor-pointer'>Update Title</button>
    </>
  )
}

export default App
