import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const handleCounter  = () => {
        // alert('counter');
        setCount(count + 1);
    }





    return (
        <>
            <h1 className='text-center bg-sky-200 text-red-600 text-3xl font-semibold py-2'>Counter</h1>
            <p className='text-center color-blue-600 mt-4'>Intial Value: {count}</p>
            <div className='text-center mt-4'>
            <button onClick={handleCounter} className='text-center text-base text-red-600 bg-white border-2 border-gray-400 rounded-sm px-4 py-2 mx-auto cursor-pointer'>Update Counter</button>
            </div>
        </>
    )
}

export default Counter;