import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Landing() {
  return (
    <>
     <Navbar/>
    <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/1003944/screenshots/15741863/media/96a2668dbf0b4da82efca00d60011ca8.gif')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
    <div className='text-2xl font-semibold text-white text-center'>Welcome to Chattify</div>
    <div className="text-center">
    <button className='text-xl p-2 rounded bg-blue-300  text-black'><Link to="/register">Join Now</Link></button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Landing