import React from 'react'

function Profile(props) {
    const { data } = props
    console.log(data);


    return (
        <>
            <div className='max-w-sm rounded-md shadow-lg overflow-hidden'>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{data.name}</div>
                    <p class="text-gray-700 text-base">
                        Age: {data.age}
                    </p>
                    <p class="text-gray-700 text-base">
                        Email: {data.email}
                    </p>
                    <p class="text-gray-700 text-base">
                        Address: {data.address}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.role}</span>
                </div>

            </div>
        </>
    )
}

export default Profile