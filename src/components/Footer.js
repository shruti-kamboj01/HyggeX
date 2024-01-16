import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div>
        <h1 className='bg-gradient-to-b from-[#06286E]  to-[#164EC0] bg-clip-text text-transparent font-bold text-5xl mt-20'>
        FAQ</h1>
        <div className=' w-[50%] mb-4 text-[#28262C] text-[16px] font-semibold space-y-6 mt-8'>
        <div className='border-[1px] border-[#217EEC] px-4 py-2 rounded-xl flex justify-between'>
        <h1 className='text-[#28262C] text-[16px] font-semibold'>Can education flashcards be used for all age groups? </h1>
        <IoIosArrowDown size={24} className='text-[#28262C]'/>
        </div>
       <div className='border-[1px] border-[#217EEC] px-4 py-2 rounded-xl flex justify-between'>
       <h1 className='text-[#28262C] text-[16px] font-semibold'>How do education flashcards work?</h1>
       <IoIosArrowDown size={24} className='text-[#28262C]'/>
       </div>
       <div className='border-[1px] border-[#217EEC] px-4 py-2 rounded-xl flex justify-between'>
       <h1 className='text-[#28262C] text-[16px] font-semibold'> Can education flashcards be used for test preparation?</h1>
       <IoIosArrowDown size={24} className='text-[#28262C]'/>
       </div>
       
        </div>
      
    </div>
  )
}

export default Footer