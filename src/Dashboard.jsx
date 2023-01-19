import React from "react"
import Sidebar from "./Sidebar"
import "./index.css"
import { Nav } from "./Nav"
import Hero from "./Hero"
import Transaction from "./Transaction"

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[300px]"> 
         {<Sidebar />} 
      </div> 
      <div className="flex flex-col gap-5 w-full">
        <div>
          {<Nav />}
        </div>
        <div className="max-w-[100%] overflow-ml-5">
          {<Hero />}
        </div>
        <div className="ml-5">
          {<Transaction />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
