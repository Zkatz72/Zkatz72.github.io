import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function Navbar(props) {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <header className="dark:bg-[#121212]/50  bg-white/80 font-inter fixed w-full top-0 z-50 border-b border-gray-100 dark:border-neutral-900">
      <nav className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className = "flex items-center gap-4">
          <img src="profile.jpeg" className='rounded-full w-16 h-16'></img>
          <a href="#">
          <div className="text-sm dark:text-neutral-200 text-black"><b>Zachary Katz</b></div>
          </a>
        </div>
        <div className="dark:bg-emerald-400/80  bg-emerald-400/50 sm:hidden md:hidden lg:hidden xl:hidden flex justify-center items-center  w-10 h-10 rounded-full  transition-transform duration-300 hover:scale-110 ">
          <img onClick={props.toggle} src={props.isNight ? `icons/${"moon"}.svg`:`icons/${"sun"}.svg`} alt="React logo" className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
            

        </div>
       
        <div className="space-x-6 font-inter hidden sm:flex md:flex lg:flex text-neutral-900 dark:text-neutral-200 xl:flex">
          <a href="#" className="hover:text-emerald-400/80  dark:hover:text-emerald-800/80">Home</a>
          <a href="#experience" className=" hover:text-emerald-400/80 dark:hover:text-emerald-800/80">Experience</a>
          <a href="#projects" className=" hover:text-emerald-400/80 dark:hover:text-emerald-800/80">Projects</a>
          <a href="#languages" className="hover:text-emerald-400/80 dark:hover:text-emerald-800/80">Skills</a>
        </div>
        
      </nav>
    </header>
  
    </>
  );
}

export default Navbar
