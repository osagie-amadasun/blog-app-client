import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen'>
      {/* Responsive Navigation Bar */}
      <nav className='flex justify-between items-center mb-32 p-4 md:p-6 lg:p-8'>
        <h1 className='font-black text-2xl sm:text-3xl md:text-4xl text-white cursor-pointer'>Blogger</h1>
        <div>
          <button 
            onClick={() => navigate("/userAuthentication")} 
            className='flex items-center justify-center gap-2 cursor-pointer border-2 p-2 rounded-xl text-white hover:bg-white hover:text-black transition-transform hover:scale-105'
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Responsive Main Content */}
      <main className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 sm:mt-20 flex justify-center items-center text-left animate-fade-in'>
        <div className='container p-4 sm:p-8 md:p-12 lg:p-16'>
          <p className='mx-4 sm:mx-10  md:mx-20 lg:mx-40 mb-0 font-extrabold text-white text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl'>
            Write, <span className='text-cyan-600'>Design,</span> <span className='text-amber-800'>Publish...</span> Seamless Blogging Made <span className='font-Allura'>Simple!</span>
          </p>
          <p className='opacity-50 text-xs sm:text-base md:text-lg text-center text-white mt-3 sm:mt-5'>
            a comprehensive platform to help people express their ideas and <span className='block'>thoughts and share them with the world</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage
