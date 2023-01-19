import logo from "./images/logo.png"
import React from "react"
import { RxDashboard } from "react-icons/rx"
import { RiAccountCircleLine } from "react-icons/ri"
import { MdOutlineContentCopy } from "react-icons/md"
import { RiRefund2Fill } from "react-icons/ri"
import { IoReceiptOutline } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { useState } from "react"

const Sidebar = () => {
    const [active, setActive] = useState([true, false, false, false, false, false])
    
    return (
        <div style={{ background: "#0F1222" }} className="text-white h-[100%] w-[full] flex flex-col gap-5 items-center">
            <div className="p-4">
                <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-col gap-3 w-full pl-5'>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[0] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<RxDashboard />}</span><span>Dashboard</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[1] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<RiAccountCircleLine />}</span><span>My Accounts</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[2] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<MdOutlineContentCopy />}</span><span>My Cards</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[3] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<RiRefund2Fill />}</span><span>Fund Transfer</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[4] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<IoReceiptOutline />}</span><span>Bill Payment</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-blue-600  w-full rounded cursor-pointer"
                    style={{ background: active[5] ? "rgb(53, 104, 245)" : "" }}>
                    <span className="text-2xl">{<FiSettings />}</span><span>Settings</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar