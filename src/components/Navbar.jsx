import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import imge from '../images/logi.webp';
import nav from '../images/nav.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<div className="flex  flex-col items-center md:flex-row ml-5"> 
    <img src={nav} className='w-auto h-[70px] mb-4 md:mb-0 md:ml-11' alt="" />
    <img src={nav} className='w-auto h-[70px] mb-4 md:block hidden' alt="" />
    <img src={nav} className='w-auto h-[70px] mb-4 md:block hidden' alt="" />
    <img src={nav} className='w-auto h-[70px] mb-4 md:block hidden' alt="" />
</div>


      <nav className="  text-orange-500 h-[75px]">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
    <img src={imge} className="w-[80px] h-20 mt-2" alt="" />
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16">
            <NavLink to="/location" className="hover:text-gray-400 text-orange-500 text-2xl font-semibold">Location</NavLink>
            <NavLink to="/aboutus" className="hover:text-gray-400 text-2xl text-orange-500  font-semibold">About Us</NavLink>
            <NavLink to="/contactus" className="hover:text-gray-400 text-2xl  text-orange-500 font-semibold">Contact Us</NavLink>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <FaBars className="w-6 h-6 text-orange-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-orange-500 z-50 rounded">
          <div className="w-full bg-orange-500 h-full p-4 ">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none mb-4"
            >
              <AiOutlineClose className="w-6 h-6 text-black" />
            </button>
            <nav className="space-y-4">
              <NavLink 
                to="/location" 
                className="block bg-black rounded-2xl hover:bg-black pl-4 hover:text-orange-500 text-orange-500 text-2xl py-2"
              >
                Location
              </NavLink>
              <NavLink 
                to="/aboutus" 
                className="block bg-black rounded-2xl  hover:bg-black pl-4 hover:text-orange-500 text-orange-500 text-2xl py-2"
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contactus" 
                className="block bg-black rounded-2xl  hover:bg-black pl-4  hover:text-orange-500 text-orange-500 text-2xl py-2"
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </nav>
    </>
  
  
  );
};

export default Navbar;