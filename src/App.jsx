import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Follow from './components/Follow'
import Postpage from './components/Postpage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [darktheme, setDarktheme] = useState(false)

  return (
    <>
      <div className={darktheme ? "flex flex-col sm:flex-row justify-between text-white bg-black" : "flex flex-col sm:flex-row justify-between"}>
        <Header darktheme={darktheme} setDarktheme={setDarktheme} />
        <Sidebar darktheme={darktheme} setDarktheme={setDarktheme}/>
        <Postpage />
        <Follow />
        <Footer />
      </div>
    </>
  )
}

export default App
