import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marque from './components/Marque'
import Partners from './components/Partners'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="min-h-screen w-full bg-[#262626] text-white">
      <Navbar/>
      <Home/>
      <Marque/>
      <Partners/>
    </div>
  )
}

export default App