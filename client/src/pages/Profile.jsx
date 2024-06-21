import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { RiWechat2Line } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

function Profile() {
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    // Redirect to login or home page
    navigate("/login");
};
  return (
    <>
       <header className="bg-zinc-800 py-2">
    <div className="container mx-auto pt-2 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center z-50">
      <Link to="/" className="flex items-center space-x-1 mb-4 sm:mb-4 select-none">
        <span className="hidden sm:inline text-white font-bold text-3xl select-none">Chattify</span>
      <RiWechat2Line className='hidden sm:inline text-white text-4xl' />
      </Link>
      <nav className="flex items-center font-Hublot">
        <ul className="flex space-x-2 sm:space-x-1 text-gray-300 font-bold select-none">
          <li>
            <Link to="/dashboard" className="px-2 sm:px-4 py-2 block font-bold text-2xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              Dash
            </Link>
          </li>
          <li>
            <span className="px-2 sm:px-4 py-2 block font-bold text-xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all space-x-1 duration-300">
              
        <span className="hidden sm:inline text-white font-bold text-2xl select-none" onClick={logOut}>Logout</span>
            </span>
          </li>
          </ul>
      </nav>
    </div>
  </header>
     <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-emerald-background_23-2150272593.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
    <div className='text-2xl font-semibold text-white text-center'>Welcome to Profile</div>
    <div className="text-center">
    <button className='text-xl p-2 rounded bg-blue-300  text-black' onClick={logOut}>Logout</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile;