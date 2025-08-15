import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './styles.css'
import Nameplate from './Nameplate'
import SectionsLayout from './layout/SectionsLayout'
import Intro from './sections/Intro'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
function App() {
  const [count, setCount] = useState(0)
  const [isNight, setIsNight] = useState(true)

  const toggleNight = () =>
  {
    document.documentElement.classList.toggle('dark');
    setIsNight(!isNight)
  }
  return (
    <>
      <div className="relative w-full h-full top-0 font dark:bg-[#121212] bg-white">
        <Navbar isNight={isNight} toggle={toggleNight}></Navbar>
        <Intro></Intro>
        <SectionsLayout>
          
          <Experience></Experience>
          <Projects isDark={isNight}></Projects>
          
          
        <div className="hidden sm:flex md:flex lg:flex xl:flex justify-center items-center bottom-4 right-4 w-16 h-16 rounded-full fixed bg-gray-200 opacity-50 transition-transform duration-300 hover:scale-110 ">
          <img onClick={toggleNight}src={isNight ? `icons/${"moon"}.svg`:`icons/${"sun"}.svg`} alt="React logo" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
            
        </div>
        <Skills isDark = {isNight}></Skills>
        </SectionsLayout>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
