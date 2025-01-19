import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen)
    }

  return (
    <div className="border-b-2 border-yellow-100 drop-shadow-sm">
        {/*========NAVIGATION SECTION======== */}
      <nav className="sticky top-0 z-[20] mx-auto w-full flex justify-between items-center p-4">
        <h1 onClick={() => navigation("/")} className="font-black text-2xl cursor-pointer text-white">Blogger</h1>
        <div className="flex justify-center items-center gap-5 mr-3">
          {/* composition admin for creating posts */}
          <div onClick={() => {navigation("/createPost")}}className="flex items-center justify-center gap-2 cursor-pointer border border-2 p-2 rounded-md text-white hover:bg-white hover:text-black">
            <FaRegEdit />
            <p>Compose</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
