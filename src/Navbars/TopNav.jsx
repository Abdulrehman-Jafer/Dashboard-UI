import React from "react";
import sun from "../assets/sun.png";
import { BsBell } from "react-icons/bs";
import Avatar from "../assets/Avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineAlignLeft } from "react-icons/ai";
export const TopNav = ({clickHandler}) => {
  return (
      <main className="flex border-b-4 border-slate-200 w-full justify-between py-[1rem] px-[0.5rem] bg-orange-300">
        <section className="flex items-center gap-1">
          <h4 className="md:text-[1.3rem] sm:block hidden">Good Morning</h4>
          <AiOutlineAlignLeft className="sm:hidden block transformY bg-orange-100 p-2 rounded-[50%] hover:bg-orange-200" onClick={clickHandler}/>
          <span>
            <img src={sun} alt="sun" />
          </span>
          <BsBell className=" bg-orange-50 cursor-pointer p-2 hover:bg-orange-200 rounded-[50%]" />
        </section>
        <section className="flex items-center font-bold gap-1">
          <span>
            <img src={Avatar} alt="Avatar" />
          </span>
          <p>Usama</p>
          <IoIosArrowDown className=" bg-orange-50 cursor-pointer p-2 hover:bg-orange-200 rounded-[50%]" />
        </section>
      </main>
  );
};
