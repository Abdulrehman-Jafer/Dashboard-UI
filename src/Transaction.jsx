import React from 'react'
import Graph from './Graph'
import Avatar2 from "./images/Avatar2.png"
import Avatar3 from "./images/Avatar3.png"
import Avatar from "./images/Avatar.png"
import { BiDotsVerticalRounded } from "react-icons/bi"

const Transaction = () => {
    return (
        <div className='bg-white px-5 py-3'>
            <div className='flex items-center justify-between mb-8'>
                <div className="font-bold">
                    Transactions
                </div>
                <div className='p-1 bg-orange-50 cursor-pointer hover:bg-orange-200 rounded-[50%]'>
                    {<BiDotsVerticalRounded className='text-2xl'/>}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between px-3 py-3 border items-center'>
                    <div className='font-semibold text-slate-600 flex-1'>Name</div>
                    <div className='font-semibold text-slate-600 flex-1'>ID</div>
                    <div className='font-semibold text-slate-600 flex-1'>Status</div>
                    <div className='font-semibold text-slate-600 flex-1'>Amount</div>
                    <div className='font-semibold text-slate-600 flex-1'>Date</div>
                </div>
                <div className='flex justify-between px-3 py-1  border items-center'>
                    <div className='font-semibold flex-1'>
                        <div className='flex items-center gap-2'>
                            <div><img src={Avatar2} alt="Avatar2" className='w-[40px]' /></div>
                            <div>Jenny Wilson</div>
                        </div>
                    </div>
                    <div className='font-semibold flex-1'>2425666</div>
                    <div className='font-semibold flex-1 text-green-600'>Complete</div>
                    <div className='font-semibold flex-1'>+$455.00</div>
                    <div className='font-semibold flex-1'>20 Dec 2022</div>
                </div>
                <div className='flex justify-between px-3 py-1  border items-center'>
                    <div className='font-semibold flex-1'>
                        <div className='flex items-center gap-2'>
                            <div><img src={Avatar3} alt="Avatar2" className='w-[40px]' /></div>
                            <div>Jenny Wilson</div>
                        </div>
                    </div>
                    <div className='font-semibold flex-1'>2425666</div>
                    <div className='font-semibold flex-1 text-green-600'>Complete</div>
                    <div className='font-semibold flex-1'>+$455.00</div>
                    <div className='font-semibold flex-1'>20 Dec 2022</div>
                </div>
                <div className='flex justify-between px-3 py-1  border items-center'>
                    <div className='font-semibold flex-1'>
                        <div className='flex items-center gap-2'>
                            <div><img src={Avatar} alt="Avatar2" className='w-[40px]' /></div>
                            <div>Jenny Wilson</div>
                        </div>
                    </div>
                    <div className='font-semibold flex-1'>2425666</div>
                    <div className='font-semibold flex-1 text-green-600'>Complete</div>
                    <div className='font-semibold flex-1'>+$455.00</div>
                    <div className='font-semibold flex-1'>20 Dec 2022</div>
                </div>
            </div>
             </div>
    )
}

export default Transaction