import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ai from '../assets/aiImage.png'
import macMini from '../assets/macMini.png'
import mozart from '../assets/mozartNew.png'
import bluelock from '../assets/blueLock.png'
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";


function HomePage() {
  const navigate = useNavigate();


  return (
    <div className='h-screen'>
      <Navbar />


      <main className='flex ml-10 mr-10 gap-8'>
        <div className='space-y-5 bg-white'>
        <div className='mt-20 ml-7 gap-4 flex items-center border-b-2'>
          <FaHome className='text-2xl' />
          <h1 className='text-lg font-bold'>Home</h1>
        </div>
        <br />

          <div className='container border-b-2'>
            <div className='flex items-center p-3'>
              <img
              src={ai}
              alt="ai story"
              className='w-20 h-20 rounded-full object-cover'
              />
              <div>
                <div className='ml-10'>
                  <h2 onClick={() => navigate("/blog001")} className='font-bold cursor-pointer hover:underline'>Google Search Ranks AI Spam Above Original Reporting in News Results</h2>
                  <p className='opacity-50'>Google adjusted it’s AI policies to target AI spam earlier this year, but plagiarized content still comes up higher in search results months later...</p>
                </div>
                <div className='flex ml-10 justify-between items-center'>
                  <h4 className='font-bold'>@efeamadasun</h4>
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>

          {/*========CARD 2=========*/}

          <div className='container border-b-2'>
            <div className='flex items-center p-3'>
              <img
              src={macMini}
              alt="apple mac mini m4 story"
              className='w-20 h-20 rounded-full object-cover'
              />
                <div className="">
                  <div className='ml-10'>
                    <h2 className='font-bold'>The New Mac Mini is Smaller, But Even More Powerful Than Ever Before</h2>
                    <p className='opacity-50'>Apple’s basic desktop computer is now a bit smaller and slightly more powerful, but it’s not for everyone...</p>
                  </div>
                  <div className='flex ml-10 justify-between items-center'>
                    <h4 className='font-bold'>@osagieamadasun</h4>
                    <FaRegHeart />
                  </div>
                </div>
              </div>
          </div>

          {/*==========CARD 3========= */}

          <div className='container border-b-2'>
            <div className='flex items-center p-3'>
              <img
              src={mozart}
              alt="mozart releases new music apparently story"
              className='w-20 h-20 rounded-full object-cover'
              />
              <div>
                <div className='ml-10'>
                  <h2 className='font-bold'>‘Mozart dropped a new single’ – classical fans queue to hear newly discovered work in Leipzig Germany</h2>
                  <p className='opacity-50'>It's not often that you can hear new music from Wolfgang Amadeus Mozart. But that's just what modern audiences enjoyed...</p>
                </div>
                <div className='flex ml-10 justify-between items-center'>
                  <h4 className='font-bold'>@sergeiRachmaninov</h4>
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>

          {/*=========CARD 4======== */}

          <div className='container border-b-2'>
            <div className='flex items-center p-3'>
              <img
              src={bluelock}
              alt="bluelock's horrendous animation"
              className='w-20 h-20 rounded-full object-cover'
              />
              <div className="4">
                <div className='ml-10'>
                  <h2 className='font-bold'>Attention!!! This Just In, Blue Lock 2nd season’s animation turned out to be dog shit</h2>
                  <p className='opacity-50'> Still Frames and an Overuse of CGI and Special Effects...</p>
                </div>
                <br />
                <div className='flex ml-10 justify-between items-center'>
                  <h4 className='font-bold'>@narutoUzumaki</h4>
                  <FaRegHeart />
                </div>
              </div>
              </div>
          </div>
        </div>

        {/*==========SIDE BAR COLUMN========= */}

        <div className='mt-28 space-y-5 border-t-2'>
          <div className='flex items-center gap-4'>
            <h1 className='font-bold text-4xl'>Trending</h1>
            <FaChartBar className='text-2xl' />
          </div>
          <div className='container flex p-14'>
            <h2 className='font-black text-6xl opacity-50 mr-5'>01</h2>
            <div>
              <div className='flex justify-between'>
                <h3 className='font-bold'>@efeamadasun</h3>
                <p>15 Jul</p>
              </div>
              <div className=''>
                <h2>
                  Google Search Ranks AI Spam Above Original Reporting in News Results
                </h2>
              </div>
            </div>
          </div>

          <div className='container flex p-14'>
            <h2 className='font-black text-6xl opacity-50 mr-5'>02</h2>
            <div>
              <div className='flex justify-between'>
                <h3 className='font-bold'>@osagieamadasun</h3>
                <p>16 Jul</p>
              </div>
              <div className=''>
                <h2>
                  The New Mac Mini is Smaller, But Even More Powerful Than Ever Before
                </h2>
              </div>
            </div>
          </div>

          <div className='container flex p-14'>
            <h2 className='font-black text-6xl opacity-50 mr-5'>03</h2>
            <div>
              <div className='flex justify-between'>
                <h3 className='font-bold'>@sergeirachmaninov</h3>
                <p>14 Jul</p>
              </div>
              <div className=''>
                <h2>
                ‘Mozart dropped a new single’ – classical fans queue to hear newly discovered work in Leipzig Germany
                </h2>
              </div>
            </div>
          </div>

          <div className='container flex p-14 '>
            <h2 className='font-black text-6xl opacity-50 mr-5'>04</h2>
            <div>
              <div className='flex justify-between'>
                <h3 className='font-bold'>@narutouzumaki</h3>
                <p>15 Jul</p>
              </div>
              <div className=''>
                <h2>
                Attention!!! This Just In, Blue Lock 2nd season’s animation turned out to be dog shit
                </h2>
              </div>
            </div>
          </div>



        </div>
      </main>
    </div>
  )
}

export default HomePage
