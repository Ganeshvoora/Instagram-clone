import React from 'react'

const Statusprofile = (props) => {
    return (
        <div>
            <div className={props.isprofile?'flex flex-row justify-start items-center m-3':'flex flex-col justify-between items-center m-3'}>
                <div className="m-1 rounded-4xl bg-gradient-to-r from-red-500 to-blue-500 p-0.5">
                    {props.imgURL?
                    <img src={props.imgURL} alt="Profile" className="w-10 h-10 border-2 border-white rounded-4xl" />:
                    <i className="fa-solid fa-circle-user text-4xl border-2 border-white rounded-4xl"></i>
                }
                </div>
                {
                    props.isprofile?<h2>{props.name?props.name:"User Name"}</h2>:<p>{props.name}</p>
                }
            </div>
        </div>
    )
}

export default Statusprofile
