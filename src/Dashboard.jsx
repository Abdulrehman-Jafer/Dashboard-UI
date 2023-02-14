import React from "react";
import Graph from "./Components/Graph";
import Balance from "./Components/Balance";
import Favrt_Transaction from "./Components/Favrt_Transaction";
import { Nav } from "./Components/Nav";
import Transaction from "./Components/Transaction";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  return (
    <main className="flex min-h-[100vh] ">
      <section className="lg:w-[15%] sm:block hidden">
        <Sidebar />
      </section>
      <section className="flex justify-around items-center flex-wrap gap-[2rem] w-[100%] mx-auto ">
        <Nav />
        <div className="flex flex-col w-[100%] gap-[2rem] lg:w-[30%]">
          <Balance />
          <Favrt_Transaction />
        </div>
        <div className=" w-[100%] bg-white p-[1rem] lg:w-[60%]">
          <Graph />
        </div>
        <Transaction />
      </section>
    </main>
  );
};

export default Dashboard;
