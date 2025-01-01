import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();


  return (
    <div className='h-screen'>
      <nav className='flex justify-between items-center p-4'>
        <h1 className='font-black text-3xl cursor-pointer'>Blogger</h1>
        <div className=''>
            <button onClick={() => navigate("/userAuthentication")} className='flex items-center text-white hover:bg-slate-600 bg-slate-500 p-3 mt-5 rounded-3xl'>Sign Up</button>
        </div>
      </nav>

      <main className='text-5xl mt-20 flex justify-center items-center text-left'>
        <div className='container p-16'>
          <p className='mx-40 mb-0 font-extrabold text-6xl'>
              Write, <span className='text-cyan-600'>Design,</span> <span className='text-amber-800'>Publish</span> Seamless Blogging Made <span className='font-Allura'>Simple!</span>
          </p>
          <p className='opacity-50 text-base text-center mt-5'>a comprehensive platform to help people express their ideas and <span className='block'>thoughts and share them with the world</span></p>
        </div>
      </main>
    </div>
  )
}

export default WelcomePage
