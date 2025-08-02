import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function Nameplate() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='font-figtree top-0 left-0 text-lg w-full rounded-2xl bg-gray-600 flex items-center space-x-4  p-4'>
      <img 
        src="/profile.jpeg" 
        alt="Profile" 
        className="w-12 h-12 rounded-full object-cover"
    />
    
    <p className="">Zachary Katz</p>
    </div>
    </>
  )
}

export default Nameplate
