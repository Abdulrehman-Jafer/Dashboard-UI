import React from 'react'

const Amount = ({amount}) => {
  return (
    <div className="flex items-center mb-10 ">
    <div className="w-[50px]">{amount}</div>
    <div className="h-[0.1px] w-full bg-slate-300 "></div>
  </div>
  )
}

export default Amount
