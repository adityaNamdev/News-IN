import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { BiSolidCabinet, BiSolidCategory } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-lg">
      <div className="flex justify-between flex-wrap  items-center p-4 bg-[#38598b]  border-gray-500 shadow-xl">
        <Link to="/"className="text-2xl font-bold flex  items-center gap-1  text-white">
          <ImNewspaper size={40} />
          news<span className="text-[#1cb3c8] text-3xl font-serif">IN</span>
        </Link>
        <SearchInput />
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl " />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:flex justify-center ${
          isOpen ? "block" : "hidden"
        } bg-[#113f67] text-white font-bold `}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 py-2 text-center">
          <li>
            <NavLink
              to="/"
              className=" hover:text-gray-400 flex items-center justify-center gap-1"
            >
              <FaHome size={22} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-headlines"
              className="hover:text-gray-400 flex items-center gap-1 justify-center"
            >
              <BiSolidCabinet size={22} />
              Top Headlines
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className="hover:text-gray-400 flex items-center gap-1 justify-center"
            >
              <BiSolidCategory size={22} />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="hover:text-gray-400 flex items-center gap-1 justify-center"
            >
             
              <FaInfoCircle size={22} /> About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className="hover:text-gray-400 flex items-center gap-1 justify-center "
            >
              <IoMdContacts size={22} />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
