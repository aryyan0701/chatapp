import React from 'react'
import { Link } from 'react-router-dom';
import { RiWechat2Line } from "react-icons/ri";

function Navbar() {
  return (
    <header className="bg-zinc-800 py-2">
    <div className="container mx-auto pt-2 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center z-50">
      <Link to="/" className="flex items-center space-x-1 mb-4 sm:mb-4 select-none">
        <span className="hidden sm:inline text-white font-bold text-3xl select-none">Chattify</span>
      <RiWechat2Line className='hidden sm:inline text-white text-4xl' />
      </Link>
      <nav className="flex items-center font-Hublot">
        <ul className="flex space-x-2 sm:space-x-4 text-gray-300 font-bold select-none">
          <li>
            <Link to="/register" className="px-2 sm:px-4 py-2 block font-bold text-xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="px-2 sm:px-4 py-2 block font-bold text-xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-2 sm:px-4 py-2 block font-bold text-xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              About
            </Link>
          </li>
          </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar