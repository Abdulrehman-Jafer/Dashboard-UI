import React from "react";
import logo from "../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <main
      style={{ background: "#0F1222" }}
      className="text-white flex flex-col gap-5 items-center w-[100%] min-h-[100%] max-w-[300px]"
    >
      <section className="p-4">
        <img src={logo} alt="logo" />
      </section>
      <main className="flex flex-col gap-3 w-full">
        <Link to={"/dashboard"}>
          <SideNavItem title={"Dashboard"} icon={<RxDashboard />} />
        </Link>
        <Link to={"/myaccount"}>
          <SideNavItem title={"My Account"} icon={<RiAccountCircleLine />} />
        </Link>
        <Link to={"/mycard"}>
          <SideNavItem title={"My Card"} icon={<MdOutlineContentCopy />} />
        </Link>
        <Link to={"/billpayment"}>
          <SideNavItem title={"Bill Payment"} icon={<IoReceiptOutline />} />
        </Link>
        <Link to={"/settings"}>
          <SideNavItem title={"Settings"} icon={<FiSettings />} />
        </Link>
      </main>
    </main>
  );
};

export default SideNav;
