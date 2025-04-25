import React from 'react'

const User = (props) => {
    return (
        <>
            <div className="flex justify-between items-center m-3">
                <i className="fa-solid fa-circle-user text-2xl m-1.5"></i>
                <div>
                    <h2>{props.name?props.name:"User Name"}</h2>
                    <p className='text-xs text-gray-400'>{props.description?props.description:"User Name"}</p>
                </div>
                <a className='text-blue-700 hover:text-blue-900 m-1 hover:underline'>{props.isuser?"Switch":"Follow"}</a>
            </div>
        </>
    )
}

export default User
