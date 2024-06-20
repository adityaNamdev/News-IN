import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { BiSolidCabinet, BiSolidCategory } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <Link
            to="/"
            className="text-lg font-bold mb-4 md:mb-0 flex gap-1 items-center"
          >
            <ImNewspaper size={30} />
            news<span className="text-[#1cb3c8] text-3xl font-serif">IN</span>
          </Link>

          <nav className="flex space-x-4 text-sm flex-wrap">
            <Link
              to="/"
              className="hover:underline flex items-center gap-1 justify-center"
            >
              <FaHome size={20} />
              Home
            </Link>
            <span>/</span>
            <Link
              to="/top-headlines"
              className="hover:underline flex items-center gap-1 justify-center"
            >
              <BiSolidCabinet size={20} />
              Top Headlines
            </Link>
            <span>/</span>
            <Link
              to="/categories"
              className="hover:underline flex items-center gap-1 justify-center"
            >
              <BiSolidCategory size={20} />
              Categories
            </Link>
            <span>/</span>
            <Link
              to="/about-us"
              className="hover:underline flex items-center gap-1 justify-center"
            >
              <FaInfoCircle size={20} /> About Us
            </Link>
            <span>/</span>
            <Link
              to="/contact-us"
              className="hover:underline flex items-center gap-1 justify-center"
            >
              <IoMdContacts size={20} />
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="text-center text-sm mt-4">
          &copy; {new Date().getFullYear()} newsIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
