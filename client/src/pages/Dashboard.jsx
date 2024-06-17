import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    // Redirect to login or home page
    navigate("/login");
};
  return (
    <>
     <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-emerald-background_23-2150272593.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
    <div className='text-2xl font-semibold text-white text-center'>Welcome to chat app</div>
    <div className="text-center">
    <button className='text-xl p-2 rounded bg-blue-300  text-black' onClick={logOut}>Logout</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard