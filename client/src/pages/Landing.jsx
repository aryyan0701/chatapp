import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    
    <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/002/188/833/non_2x/chat-wallpaper-social-media-message-background-copy-space-for-a-text-vector.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-lg md:max-w-md p-10 space-y-4 bg-zinc-800 rounded-lg shadow-lg">
    <div className='text-2xl font-semibold text-white text-center'>Welcome to chat app</div>
    <div className="text-center">
    <button className='text-xl p-2 rounded bg-blue-300  text-black'><Link to="/register">Join Now</Link></button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Landing