import React from 'react'
import { useState } from 'react';

function validation() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);


    function checkValidation() {
        let isValid = true;
        const errors = {};


        if (!firstName.trim()) {
            isValid = false;
            errors.firstName = "First name is required"
        }

        if (!lastName.trim()) {
            isValid = false;
            errors.lastName = "Last name is required"
        }

        if (!password.trim()) {
            isValid = false;
            errors.password = "Password is required"
        }

        setErrors(errors);

        return isValid;



    }
    function handleSubmit(event) {
        event.preventDefault();

        if (checkValidation()) {
            const data = {
                firstName,
                lastName,
                password
            }
            setSubmittedData(data);;
        }

    }


    return (
        <>
            <h1 className='text-4xl text-blue-500 font-bold border-b border-blue-500 pb-1 text-center mb-6'>Validation</h1>

            <div className='form-wrapper max-w-sm shadow-sm rounded-ld mx-auto'>
                <form action="" onSubmit={handleSubmit} className='p-3'>
                    <div className="form-group mb-4">
                        <label htmlFor="fname" className='font-medium block mb-1'>First Name</label>
                        <input className='border border-gray-300 rounded-sm p-2 w-full focus:outline-blue-500'
                            type="text"
                            name='fname'
                            id='fname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="lname" className='font-medium block mb-1'>Last Name</label>
                        <input className='border border-gray-300 rounded-sm p-2 w-full focus:outline-blue-500'
                            type="text"
                            name='lname'
                            id='lname'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="password" className='font-medium block mb-1'>Password</label>
                        <input className='border border-gray-300 rounded-sm p-2 w-full focus:outline-blue-500'
                            type="password"
                            name='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="form-group">
                        <button className='border border-blue-500 rounded-sm bg-white text-blue-600 px-4 py-1.5 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out' type='submit'>Submit</button>
                    </div>
                </form>

                {submittedData &&
                    <div className='mt-4'>

                        <p>First Name: {submittedData.firstName}</p>
                        <p>Last Name: {submittedData.lastName}</p>
                        <p>Password: {submittedData.password}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default validation