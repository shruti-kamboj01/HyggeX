import React from 'react'
import { MdOutlineLightbulb } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineReplay } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import component401 from '../assets/Component 40 (1).png'
import group from '../assets/Group 1.png'

const MainSection = () => {
  return (
    <div >
        <h1 className='bg-gradient-to-b from-[#06286E]  to-[#164EC0] bg-clip-text text-transparent font-bold text-[32px] '>Relations and Functions ( Mathematics )</h1>

        <div className='flex gap-x-10 items-center justify-center mt-16 mb-8'>
            <h1 className='text-[#06286E] text-[20px] font-bold underline'>Study</h1>
            <h1 className='text-[#696671] text-[20px] font-medium'>Quiz</h1>
            <h1 className='text-[#696671] text-[20px] font-medium'>Test</h1>
            <h1 className='text-[#696671] text-[20px] font-medium'>Game</h1>
            <h1 className='text-[#696671] text-[20px] font-medium'>Others</h1>
        </div>

        <div>
            <div className='bg-gradient-to-b ml-[380px] from-[#051A91] via-[#2284F1] to-[#1F80EB] w-[712px] h-[393.19px] rounded-[42.51px]'>
                <div className='flex justify-between text-[#F5F5F5]  '>
                <MdOutlineLightbulb className='mt-8 ml-8' size={24}/>
                <HiSpeakerWave  className='mt-8 mr-8' size={24}/>
                </div>
                <h1 className='text-center mt-28 text-[#FFFFFF] font-bold text-[32px]'>9 + 6 + 7x - 2x - 3</h1>
            </div>
           <div className='flex justify-evenly mt-6'>
           <MdOutlineReplay size={25} className='text-[#06286E] mt-1.5'/>
           <div className='flex gap-x-4'>
           <IoIosArrowDropleftCircle size={25} className='text-[#06286E] mt-1.5'/>
           <p className='text-[#202B37] text-[24px] font-bold'>01/10</p>
        
           <IoIosArrowDroprightCircle size={25} className='text-[#06286E] mt-1.5'/>
           
          
           </div>
           
           <MdOutlineZoomOutMap size={25} className='text-[#06286E] mt-1'/>
           </div>
        </div>

       <div className='flex justify-between mt-16'>
       <div className='flex gap-x-4'>
           
                <img src={group} className='shadow-[2px_2px_38px_4px_rgba(8,56,153,0.4)] rounded-full w-[40px] h-[40px] '/>
          
            <div className='flex flex-col'>
                <p className='text-[#696671] font-bold text-xs'>Published by</p>
                <img src={component401}/>
                
            </div>
        </div>

        <div>
            <div className='flex gap-x-2'>
            <IoIosAddCircle size={24} className='text-[#06286E]'/>
            <h1 className='bg-gradient-to-b from-[#06286E]  to-[#164EC0] bg-clip-text text-transparent text-[16px] font-semibold'>Create Flashcard</h1>
            </div>
        </div>
       </div>
    </div>
  )
}

export default MainSection