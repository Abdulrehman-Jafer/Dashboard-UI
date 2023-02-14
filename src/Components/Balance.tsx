import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";


const Balance = () => {
    return (
        <section className="flex flex-col  gap-4 bg-white p-3 rounded-lg">
            <div className="flex justify-between items-center mb-10">
                <p className="font-semibold">Balance</p>
                <i className="p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]">
                    {<BiDotsVerticalRounded />}
                </i>
            </div>
            <h4 className="font-semibold text-3xl">$10,500.00 USD</h4>
            <h6 className="font-semibold text-slate-500">Available</h6>
        </section>
    )
}

export default Balance
