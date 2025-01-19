import React from 'react'

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 h-[73px] bg-gray-800/90 backdrop-blur-sm shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="flex items-center">
            <Link to="/">
          <img src="/api/placeholder/165/50" alt="SafeTravel" className="w-[165px]" /></Link>
        </div>
        
        <div className="hidden md:flex gap-14">
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">RIDES</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">SAFETY</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">BUSINESS</a>
          <a href="#" className="text-gray-300 font-medium tracking-wide hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">HELP</a>
        </div>
        
        <div className="flex items-center gap-5">
          <button className="w-[163px] h-[53px] bg-yellow-500 text-gray-900 rounded-full font-semibold tracking-wide hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
            BOOK A RIDE
          </button>
          <Link to="/login">
          <button className="w-[120px] h-[53px] border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold tracking-wide hover:bg-yellow-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
            SIGN IN
          </button></Link>
        </div>
      </nav>
  )
}
