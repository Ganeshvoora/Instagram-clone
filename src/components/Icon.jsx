import React from 'react'

const Icon = (props) => {
  return (
    <div className='flex justify-around items-center m-3'>
        <i className={props.icon+" text-2xl m-1"}></i>
        <p className='text-lg hidden xl:block'>{props.name}</p>
    </div>
  )
}

export default Icon
