import React from 'react'
import sun from "./images/sun.png"
import { BsBell } from "react-icons/bs"
import Avatar from "./images/Avatar.png"
import { IoIosArrowDown } from "react-icons/io"
export const Nav = () => {
    return (
        <div className='flex border-b-4 border-slate-200 w-full justify-between p-5'>
            <div className="flex items-center gap-1">
                <div className='text-[1.3rem] font-bold'>Good Morning</div>
                <div><img src={sun} alt="sun" /></div>
            </div>
            <div className="flex items-center gap-10">
                <div className='text-[1.3rem] bg-orange-50 cursor-pointer hover:bg-orange-200 p-2 rounded-[50%]'>
                    {<BsBell />}
                </div>
                <div className='flex items-center font-bold gap-1'>
                    <span><img src={Avatar} alt="Avatar" /></span>
                    <span>Usama</span>
                    <div className='text-[1.3rem] bg-orange-50 cursor-pointer hover:bg-orange-200 p-2 rounded-[50%]'>
                    {<IoIosArrowDown/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
