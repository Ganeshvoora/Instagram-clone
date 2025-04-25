import React from 'react'
import Icon from './Icon'
const footericons = [
    {
        icon: "fa-solid fa-house",
        name: "Home"
    },
    {
        icon: "fa-solid fa-compass",
        name: "Explore"
    },
    {
        icon: "fa-solid fa-clapperboard",
        name: "Reels"
    },
    {
        icon: "fa-solid fa-square-plus",
        name: "Create"
    },
    {
        icon: "fa-solid fa-paper-plane",
        name: "Messages"
    },    
    {
        icon: "fa-solid fa-circle-user",
        name: "Profile"
    }
]
const Footer = ({ darktheme, setDarktheme }) => {
  return (
    <div className ={darktheme?"sm:hidden fixed bottom-0 w-full h-16 flex justify-around items-center border-t border-gray-300 bg-black":"sm:hidden fixed bottom-0 w-full h-16 flex justify-around items-center border-t border-gray-300 bg-white"}>
      {footericons.map((icon) => (
                    <Icon icon={icon.icon} name={icon.name}/>
                ))}
    </div>
  )
}

export default Footer
