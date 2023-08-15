import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#4245f5] p-4 h-[600px] rounded-lg flex flex-col items-center justify-center">
      {/* Sidebar content */}
      <nav className="flex flex-col items-center justify-center w-[80%]">
        <ul className="space-y-4 flex flex-col items-center justify-center w-[100%]">
          <li className="border-b-2 w-[100%] p-1">
            <NavLink
              to="/Profile"
              className="text-white block text-lg hover:text-red-800" // Set the font size here
              activeClassName="text-blue-500"
            >
              Profile
            </NavLink>
          </li>
          <li className="border-b-2 w-[100%] p-1">
            <NavLink
              to="/Post"
              className="text-white block text-lg hover:text-red-800" // Set the font size here
              activeClassName="text-blue-500"
            >
              Posts
            </NavLink>
          </li>
          <li className="border-b-2 w-[100%] p-1">
            <NavLink
              to="/Gallery"
              className="text-white block text-lg hover:text-red-800" // Set the font size here
              activeClassName="text-blue-500"
            >
              Gallery
            </NavLink>
          </li>
          <li className="border-b-2 w-[100%] p-1">
            <NavLink
              to="/ToDo"
              className="text-white block text-lg hover:text-red-800" // Set the font size here
              activeClassName="text-blue-500"
            >
              ToDo
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
