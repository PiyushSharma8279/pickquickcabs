import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaGoogle,
  FaBars,
  FaTimes,
  
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from "../../Images/logo.gif"

function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <div className="fixed top-0 left-0 w-full flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-6 bg-black text-white text-xs sm:text-sm z-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          
          <span className="flex items-center gap-2">
            <FaEnvelope /> book@pickquickcabs.com
          </span>
        </div>
        <div className="flex  gap-4  md:justify-end">
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaGoogle />
        </div>
      </div>


     <div className="bg-yellow-400 fixed top-0 left-0 right-0 flex items-center gap-20 px-4 sm:px-8 py-4 z-30 mt-16">

  {/* Logo + Text Together */}
  <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
    <img
      src={logo}
      alt="logo"
      className="h-10 sm:h-14 object-contain"
    />
    <span className="font-extrabold text-xl sm:text-2xl tracking-wide text-black">
      PICK QUICK CABS
    </span>
  </div>

  {/* Navigation Menu */}
  <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold">
    <li className="text-gray-600 font-bold cursor-pointer hover:text-black" onClick={()=> navigate('/')}>HOME</li>
    <li className="cursor-pointer text-gray-600 font-bold hover:text-black" onClick={()=> navigate('/about')}>ABOUT</li>
    <li className="cursor-pointer text-gray-600 font-bold hover:text-black" onClick={()=> navigate('/our-taxi')}>OUR TAXI</li>
    <li className="cursor-pointer text-gray-600 font-bold hover:text-black" onClick={()=> navigate('/book-a-ride')}>BOOK A RIDE</li>
    <li className="cursor-pointer text-gray-600 font-bold hover:text-black" onClick={()=> navigate('/blog')}>BLOG</li>
    <li className="cursor-pointer text-gray-600 font-bold hover:text-black" onClick={()=> navigate('/contact')}>CONTACT</li>
  </ul>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-black text-2xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Phone Box (Desktop Only) */}
  <div className="hidden md:flex items-center bg-black text-white px-6 py-2 rounded-l-full absolute right-0 top-0 bottom-0">
    <FaPhoneVolume className="text-yellow-400 mr-4 size-10" />
    <div>
      <p className="font-medium text-lg text-yellow-400">8447433852</p>
      <p className="text-[10px] lg:text-xs">PHONE LINE</p>
    </div>
  </div>
</div>


      {menuOpen && (
        <div className="md:hidden bg-yellow-300 text-black font-semibold flex flex-col gap-4 px-6 py-6 fixed top-32 z-50 left-0 right-0">
          <p onClick={()=> navigate('/')}>HOME</p>
          <p onClick={()=> navigate('/about')}>ABOUT</p>
          <p onClick={()=> navigate('/our-taxi')}>OUR TAXI</p>
          <p onClick={()=> navigate('/book-a-ride')}>BOOK A RIDE</p>
          <p onClick={()=> navigate('/blog')}>BLOG</p>
          <p onClick={()=> navigate('/contact')}>CONTACT</p>


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
