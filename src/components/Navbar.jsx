import React, { useState } from 'react';
import { AiFillBell } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import profilePic from "../assets/profilePic.jpg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen)
    }

  return (
    <div className="border-b-2 drop-shadow-sm">
        {/*========NAVIGATION SECTION======== */}
      <nav className="sticky top-0 z-[20] mx-auto w-full flex justify-between items-center p-4">
        <h1 onClick={() => navigation("/")} className="font-black ml-10 text-3xl cursor-pointer">Blogger</h1>
        <div className="relative">
          <div className="flex items-center mr-96">
          <IoSearch className="absolute text-2xl opacity-50 ml-3" />
            <input 
              type="search" 
              name="search" 
              placeholder="Search..."
              className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-in-out" 
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mr-3">
          <div className="flex items-center justify-center gap-2">
            <FaRegEdit />
            <p>write</p>
          </div>
          <AiFillBell />
          <div>
            <img 
              src={profilePic} 
              alt="profile image" 
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
            />
          </div>
        </div>

        {/* ========MOBILE======== */}
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>
                {isOpen ? <IoIosClose /> : <IoMenu />}
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
