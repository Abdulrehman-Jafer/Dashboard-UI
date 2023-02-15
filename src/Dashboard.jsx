import React, { useState } from "react";
import Graph from "./Graph/Graph";
import Balance from "./Hero/Balance";
import Favrt_Transaction from "./Hero/Favrt_Transaction";
import { TopNav } from "./Navbars/TopNav";
import Transaction from "./Hero/Transaction";
import SideNav from "./Navbars/SideNav";

const Dashboard = () => {
  const [className, setClassName] = useState("hidden");
  const setter = () => {
    setClassName((prev) => (prev === "hidden" ? "transformX block" : "hidden"));
  };
  return (
    <main className="flex min-h-[100vh]">
      <section className="lg:w-[15%] sm:block hidden">
        <SideNav />
      </section>
      <section className="flex justify-around items-center flex-wrap gap-[2rem] w-[100%] mx-auto ">
        <TopNav clickHandler={setter} />
        <div className="flex flex-col w-[100%] gap-[2rem] lg:w-[30%]">
          <Balance />
          <Favrt_Transaction />
        </div>
        <div className=" w-[100%] bg-white p-[1rem] lg:w-[60%]">
          <Graph />
        </div>
        <Transaction />
      </section>
      <section
        className={`absolute left-0 h-[130vh] top-[5rem] ${className} sm:hidden opacity-[0.9] backdrop-blur-lg`}
      >
        <SideNav />
      </section>
    </main>
  );
};

export default Dashboard;
