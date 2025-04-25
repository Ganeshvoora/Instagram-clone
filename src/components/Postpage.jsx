import React from 'react'
import Status from './Status'
import Posts from './Posts'

const Postpage = () => {
  return (
    <div className='w-full h-screen p-4 pt-20 sm:pt-4 overflow-y-scroll scrollbar px-20 sm:px-40'>
      <Status />
      <Posts />
    </div>
  )
}

export default Postpage
