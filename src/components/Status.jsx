import React from 'react'
import Statusprofile from './Statusprofile'

const statususer =[
    {
      username: "techie_tommy"
    },
    {
      username: "artsy_ava"
    },
    {
      username: "wander_with_lee"
    },
    {
      username: "chef_charlie"
    },
    {
      username: "plantlady_emma"
    },
    {
      username: "techie_tommy"
    },
    {
      username: "artsy_ava"
    },
    {
      username: "wander_with_lee"
    },
    {
      username: "chef_charlie"
    },
    {
      username: "plantlady_emma"
    }
  ];

const Status = () => {
  return (
    <div className='flex overflow-x-auto scrollbar'>
    {
        statususer.map((details)=><Statusprofile name={details.username} />)
    }
    </div>
  )
}

export default Status
