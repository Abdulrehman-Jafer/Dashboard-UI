import React from "react";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar1 from "../assets/Avatar.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import TransactionDetails from "./TransactionDetails";

const Transaction = () => {
  return (
    <main className="bg-white py-3 w-[95%] mx-auto px-[1rem]">
      <section className="flex items-center justify-between mb-8">
        <div className="font-bold">Transactions</div>
        <BiDotsVerticalRounded className="p-1 bg-orange-100 cursor-pointer hover:bg-orange-200 rounded-[50%]" />
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between px-3 py-3 border items-center">
          <h6 className="font-semibold text-slate-600 flex-1">Person</h6>
          <h6 className="font-semibold text-slate-600 flex-1 hidden md:block">
            ID
          </h6>
          <h6 className="font-semibold text-slate-600 flex-1">Status</h6>
          <h6 className="font-semibold text-slate-600 flex-1">Amount</h6>
          <h6 className="font-semibold text-slate-600 flex-1 hidden sm:block">
            Date
          </h6>
        </div>
        <TransactionDetails
          img={Avatar1}
          name={"Jenny Wilson"}
          id={2425666}
          status={"Complete"}
          amount={455.0}
          date={"20 Dec 2022"}
        />
        <TransactionDetails
          img={Avatar2}
          name={"Jenny Wilson"}
          id={2425666}
          status={"Complete"}
          amount={455.0}
          date={"20 Dec 2022"}
        />
        <TransactionDetails
          img={Avatar3}
          name={"Jenny Wilson"}
          id={2425666}
          status={"Complete"}
          amount={455.0}
          date={"20 Dec 2022"}
        />
         <TransactionDetails
          img={Avatar1}
          name={"Jenny Wilson"}
          id={2425666}
          status={"Complete"}
          amount={455.0}
          date={"20 Dec 2022"}
        />
      </section>
    </main>
  );
};

export default Transaction;
