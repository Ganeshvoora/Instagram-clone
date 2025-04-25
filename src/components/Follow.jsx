import React from 'react'
import User from './User'


const users = [
    {
      username: "techie_tommy",
      description: "Followed by coder_claire + 2 others",
    },
    {
      username: "artsy_ava",
      description: "Followed by paint.pro + 3 others",
    },
    {
      username: "wander_with_lee",
      description: "Followed by globe.roamer + 5 others",
    },
    {
      username: "chef_charlie",
      description: "Followed by tasty.bites + 4 others",
    },
    {
      username: "plantlady_emma",
      description: "Followed by green.thumb + 1 other",
    },
  ];


const Follow = () => {
    return (
        <>
            <div className='hidden lg:block w-[350px] h-screen p-6'>
                
                <User name="" description="" isuser={true} />
                <div className="flex justify-between">
                    <p>Suggested for you</p>
                    <p>See All</p>
                </div>
                {
                    users.map((details)=><User name={details.username} description={details.description} />)
                }
            </div>

        </>
    )
}

export default Follow
