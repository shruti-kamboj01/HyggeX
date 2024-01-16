import React from 'react'
import component40 from '../assets/Component 40.png'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between  mx-auto mt-8'>
        <div>
        <img src={component40}/>
        </div>
        <div className='flex text-[#3A3740] gap-x-10 text-lg font-normal'>
            <h1>Home</h1>
            <h1>FlashCard</h1>
            <h1>Contact</h1>
            <h1>FAQ</h1>
            <button className='text-white font-medium bg-gradient-to-b from-[#06286E]  to-[#164EC0]  
            rounded-full px-7 py-1'>Login</button>
        </div>
    </div>
  )
}

export default Navbar