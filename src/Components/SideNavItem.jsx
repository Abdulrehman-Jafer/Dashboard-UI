import React from "react";
import {useLocation} from "react-router-dom"

const SideNavItem = ({title,icon}) => {
    const lowerCasedTitle = "/" + (title.split(" ").join("").toLocaleLowerCase())
    const {pathname} = useLocation()
    
  return (
    <div className={`flex items-center gap-2 py-2 hover:bg-blue-600 w-[100%] rounded cursor-pointer text-white ${pathname === lowerCasedTitle ? "bg-blue-600" : "" }`}>
      <span className="text-2xl translateY">{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default SideNavItem;
