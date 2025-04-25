import React from 'react'
import Icon from './Icon'

const sidebaricons = [
    {
        icon: "fa-solid fa-house",
        name: "Home"
    },
    {
        icon: "fa-solid fa-magnifying-glass",
        name: "Search"
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
        icon: "fa-solid fa-paper-plane",
        name: "Messages"
    },
    {
        icon: "fa-solid fa-heart",
        name: "Notifications"
    },
    {
        icon: "fa-solid fa-square-plus",
        name: "Create"
    },
    {
        icon: "fa-solid fa-circle-user",
        name: "Profile"
    }
]
const sidebaricons2 = [
    {
        icon: "fa-regular fa-circle",
        name: "Meta AI"
    },
    {
        icon: "fa-brands fa-threads",
        name: "Threads"
    },
    {
        icon: "fa-solid fa-bars",
        name: "More"
    }
]

const Sidebar = ({darktheme, setDarktheme}) => {
    return (
        <div className='hidden sm:flex flex-col items-center justify-between h-screen w-[100px] xl:w-[245px] border-x-1 border-gray-300 p-5'>
            <span className='xl:hidden'><i className="fa-brands fa-instagram text-4xl"></i></span>
            <h1 className='pacifico-regular hidden xl:block'>Instagram</h1>

            <div className='flex flex-col items-start justify-center'>
                {sidebaricons.map((icon) => (
                    <Icon icon={icon.icon} name={icon.name}/>
                ))}
            </div>
            
            
            <div className='flex flex-col items-start justify-center'>
                {sidebaricons2.map((icon) => (
                    <Icon icon={icon.icon} name={icon.name}/>
                ))}
                {darktheme ? (
        <button onClick={() => setDarktheme(false)} className="fa-solid fa-sun">  Light</button>
      ) : (
        <button onClick={() => setDarktheme(true)} className="fa-solid fa-moon">  Dark</button>
      )}
            </div>

        </div>
    )
}

export default Sidebar
