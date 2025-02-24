import React from 'react'
import { useState } from 'react'

function FormHandler() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        term: "",
        gender: "",
    })

    function formSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }

    function handleChange(event) {
               
        const {name, value, type, checked} = event.target
        
        if (type === "checkbox") {
            setFormData({...formData, [name]:checked})
        }
        
        else {
            setFormData({...formData, [name]: value})
        }
    }



    
    return (
        <>
            <h1 className='title font-bold text-3xl py-2 mb-7 text-black text-center border-b'>Form Handling in React</h1>
            <div className='form-wrapper max-w-md mx-auto p-4 shadow-md shadow-blue-500/50 rounded-md'>
                <form action="" onSubmit={formSubmit}>
                    <div className='form-field-wrapper mb-4'>
                        <label className='block text-black text-base font-medium pb-2' htmlFor="firstName">First Name</label>
                        <input
                            className='block w-full min-h-7 border outline-none border-gray-300 rounded-sm p-1 text-black transition ease-in-out duration-300 focus:border-blue-500'
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-field-wrapper mb-4'>
                        <label className='block text-black text-base font-medium pb-2' htmlFor="lastName">Last Name</label>
                        <input
                            className='block w-full min-h-7 border outline-none border-gray-300 rounded-sm p-1 text-black transition ease-in-out duration-300 focus:border-blue-500'
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-field-wrapper mb-4'>
                        <input
                        className='align-middle'
                        type="checkbox"
                        name='term'
                        id='term'
                        checked={formData.term}
                        onChange={handleChange}
                         />
                        <label className='text-black text-base font-medium ps-2 align-middle' htmlFor="term">Term & conditions</label>
                    </div>

                    <div className='form-field-wrapper mb-4 flex gap-2'>
                        <label htmlFor="male">
                            <input type="radio" name='gender' id='male' checked={formData.gender === 'male'} value="male" onChange={handleChange} />
                            <span className='ml-2 text-black text-base font-medium'>Male</span>
                        </label>
                        <label htmlFor="female">
                            <input type="radio" name='gender' id='female' checked={formData.gender === 'female'} value="female" onChange={handleChange} />
                            <span className='ml-2 text-black text-base font-medium'>Female</span>
                        </label>
                    </div>

                    <div className='form-field-wrapper mb-4'>
                        <button type='submit' className='block max-w-min text-black-600 text-base font-medium border border-blue-500 rounded-sm px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition ease-in-out duration-300'>Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormHandler