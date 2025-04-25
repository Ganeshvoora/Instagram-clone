import React from 'react'
import Icon from './Icon'

const Header = ({ darktheme, setDarktheme }) => {
  return (
    <div className='sm:hidden fixed top-0 w-full h-16 flex justify-around items-center border-t border-gray-300'>
      <h1 className='pacifico-regular'>Instagram</h1>
      <input className='border-1 w-60 rounded-md h-9 p-1' placeholder='🔍 Search' type="text" />
      <Icon icon={"fa-solid fa-heart"} name={"Notifications"} />
      {darktheme ? (
        <button onClick={() => setDarktheme(false)} className="fa-solid fa-sun"></button>
      ) : (
        <button onClick={() => setDarktheme(true)} className="fa-solid fa-moon"></button>
      )}
    </div>
  )
}

export default Header
