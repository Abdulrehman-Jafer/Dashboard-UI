import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi"
import Graph from './Graph'
import Avatar2 from "./images/Avatar2.png"
import Avatar3 from "./images/Avatar3.png"

const Hero = () => {
  return (
    <div className='w-full flex justify-around items-center p-5 flex-wrap'>
      <div className="flex flex-col w-[300px] gap-[2rem]">
        <div className="flex flex-col  gap-4 bg-white p-3 rounded-lg">
          <div className='flex justify-between items-center mb-10'>
            <div className="font-semibold">
              Balance
            </div>
            <div className='p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]'>
              {<BiDotsVerticalRounded />}
            </div>
          </div>
          <div className='font-semibold text-3xl'>$10,500.00 USD</div>
          <div className='font-semibold text-slate-500'>Available</div>
        </div>
        <div className='flex flex-col gap-5 bg-white p-3  rounded-lg'>
          <div className="flex justify-between items-center mb-6">
            <div className='font-semibold text-xl'>
              Favourite Transfers
            </div>
            <div className='text-sm font-semibold text-slate-500 cursor-pointer hover:text-slate-600'>
              See All
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='border flex gap-3 items-center p-3 rounded-lg'>
              <div><img src={Avatar2} alt="Avatar2" /></div>
              <div className=' font-semibold text-lg'>Kathryn Murphy</div>
            </div>
            <div className='border flex gap-3 items-center p-3 rounded-lg'>
              <div><img src={Avatar3} alt="Avatar3" /></div>
              <div className='font-semibold text-lg'>Wade Warren</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[60%] bg-white p-5 rounded-lg'>
        <div className='flex justify-between items-center mb-7'>
          <div className='font-bold'>Insights</div>
          <div className='p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]'>{<BiDotsVerticalRounded />}</div>
        </div>
        <div>
          {<Graph />}
        </div>
      </div>
    </div>
  )
}

export default Hero