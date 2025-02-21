import React from 'react';

function UserCard (props) {
    console.log(props);
    const {name:n, age:a, email:e} = props;

    



    return (
        <>
        <div className="user-card shadow rounded-2xl border-2 border-gray-50">
            <div className='inner-content'>
               <h2>{props.title}</h2>
                <p>Name: {n}</p>
                <p>Age: {a}</p>
                <p>Email: {e}</p>
            </div>
        </div>
        </>
    )
}

export default UserCard;