

import React from "react";
import { NavLink } from "react-router-dom";
import {  FiSettings, FiLogOut } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";

import { LiaBookReaderSolid } from "react-icons/lia";
import { MdOutlineAddchart } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";

const UserSideBar: React.FC = () => {

    interface link {
        name: string;
        icon: JSX.Element;
        path: string;

        logout?: boolean;
    }

    const links:link[] = [
        { name: "Home", icon: <GrHomeRounded />, path: "/user" },
        { name: "My Shelf", icon: <LiaBookReaderSolid />, path: "/community" },
        { name: "Connect", icon: <RiUserCommunityLine />, path: "/bookings" },
        { name: "Contribute", icon: < MdOutlineAddchart />, path: "/messages" },
        { name: "Settings", icon: <FiSettings />, path: "/settings" },
        { name: "Logout", icon: <FiLogOut />, path: "/logout", logout: true },
      ];
  return (
    <>
          <div className="flex flex-col md:w-64  md:h-screen md:fixed md:top-[10rem] md:left-[8rem]  md:flex md:flex-col">
      {/* Desktop Sidebar */}
      <ul className="hidden md:flex md:flex-col space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded ${
                  isActive
                    ? "bg-base text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                } ${link.logout ? "text-red-600 hover:bg-red-50" : ""}`
              }
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <ul className="flex md:hidden fixed bottom-0 left-0 bg-white  z-40 right-0 bg-input border-t-2 border-t-secondary border-gray-200 justify-around p-2">
        {links
          .filter((link) => !link.logout)
          .map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-col items-center space-y-1 ${
                    isActive
                      ? " text-base font-bold "
                      : "text-slate-600 hover:text-green-700"
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-xs ">{link.name}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
    </>
  )
}

export default UserSideBar
