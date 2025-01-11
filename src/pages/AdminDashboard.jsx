import React from 'react'
import Navbar from '../components/Navbar'
import { FaFileAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import amadasun from '../assets/amadasun.jpg'



function AdminDashboard() {
  return (
    <div>
        <Navbar />
        <div className='border-b-2 mt-10'></div>

        <div className='flex'>
          <section className='ml-14 border-r-2 w-1/4 h-screen'>
            <div>
              <p className='font-bold text-xl mt-3 mb-2 pb-3 border-b-2'>Dashboard</p>
              <div className='space-y-1'>
                <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                  <FaFileAlt />
                  <p>Blogs</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                  <IoMdNotifications />
                  <p>Notifications</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                  <FiEdit />
                  <p>Write</p>
                </div>
              </div>
            </div>

            <div>
              <div className='mt-10'>
                <p className='font-bold text-xl border-b-2 pb-2'>Settings</p>
                <div className='space-y-1'>
                  <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                    <MdModeEdit />
                    <p>Edit Profile</p>
                  </div>
                  <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                    <MdVpnKey />
                    <p>Change Password</p >
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='container flex flex-row-reverse items-center gap-5 ml-40 mt-3'>
              <img
                src={amadasun}
                alt="pfp of a man named amadasun"
                className='w-60 h-60 rounded-full object-cover border-2'
              />
              <div>
                <h1 className='font-bold text-3xl'>Osagie Amadasun</h1>
                <i className='opacity-50'>say something about yourself</i>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default AdminDashboard
