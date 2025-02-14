import React from 'react'

function ClickEvent() {
    let title = "Click Event";

    function showMessage(){
        alert('Alert show successfully')
    }

    return (
        <>
            <h1 className="text-center bg-black font-bold text-4xl text-white p-4">{title}</h1>
            <div className='text-center mt-4'>
                <button onClick={() => {title = "Message has been changed"; alert(title)}} className='text-center text-lg border px-4 border-gray-400 rounded-sm hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-500 cursor-pointer'>Click Here</button>
            </div>
        </>
    )
}

export default ClickEvent