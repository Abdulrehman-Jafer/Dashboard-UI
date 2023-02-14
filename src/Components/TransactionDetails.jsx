import React from "react";

const TransactionDetails = ({img,name,id,status,amount,date}) => {
  return (
    <div className="flex justify-between px-3 py-1  borderBottom items-center">
      <div className="sm:font-semibold flex-1 flex items-center gap-2">
        <span>
          <img src={img} alt={img} className="w-[40px]" />
        </span>
        <span className="hidden sm:block">{name}</span>
      </div>
      <h6 className="font-semibold flex-1 hidden md:block">{id}</h6>
      <h6 className="font-semibold flex-1 text-green-600">{status}</h6>
      <h6 className="font-semibold flex-1">+${amount}</h6>
      <h6 className="font-semibold flex-1 hidden sm:block">{date}</h6>
    </div>
  );
};

export default TransactionDetails;
