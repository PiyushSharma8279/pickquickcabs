import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaGoogle,
  FaBars,
  FaTimes,
  
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-6 bg-black text-white text-xs sm:text-sm z-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span className="flex items-center gap-2">
            <FaUser /> Customer Sign In
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> needhelp@conexi.com
          </span>
        </div>
        <div className="flex  gap-4  md:justify-end">
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaGoogle />
        </div>
      </div>


      <div className="bg-yellow-400 fixed top-0 left-0 right-0 flex items-center gap-36 px-4 sm:px-8 py-4  z-30 md:mt-16 mt-24">

        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl">
          <img
            src="https://old3.commonsupport.com/wp/conexi/wp-content/themes/conexi/assets/images/logo.png"
            alt="logo"
            className="h-8 sm:h-10"
          />
        </div>


        <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold">
          <li className="text-black cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">PAGES</li>
          <li className="cursor-pointer">BOOK A RIDE</li>
          <li className="cursor-pointer">SHOP</li>
          <li className="cursor-pointer">BLOG</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>


        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


        <div className="hidden md:flex items-center bg-black text-white px-6 py-2 rounded-l-full absolute right-0 top-0 bottom-0">
          <FaPhoneVolume className="text-yellow-400 mr-4 size-10" />
          <div>
            <p className="font-medium text-lg  text-yellow-400">888 888 8888</p>
            <p className="text-[10px] lg:text-xs">PHONE LINE</p>
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-yellow-300 text-black font-semibold flex flex-col gap-4 px-6 py-6 relative top-40">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PAGES</a>
          <a href="#">BOOK A RIDE</a>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>


          <div className="flex items-center gap-2 bg-black text-yellow-400 px-4 py-2 rounded-lg mb-4">
            <FaPhoneAlt className="text-yellow-400" />
            <span className="text-sm md:text-base">888 888 8888</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
