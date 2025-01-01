import React, { useState } from "react";
import { IoLogInSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

  }


  return (
    <div>
      <nav className='flex justify-between items-center p-4'>
        <h1 onClick={() => navigate("/welcomeLandingPage")} className='font-black text-3xl cursor-pointer'>Blogger</h1>
      </nav>

      <main>
        <div>
          <h1 className="text-5xl text-center font-bold mt-20">
            Join a Community of Bloggers Today
          </h1>
        </div>
        <div className="mt-20">
          {/*======FORM FIELD===== */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div>
              <label htmlFor="firstname"></label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your Firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-in-out"
              />
            </div>
            <br />
            <div>
              <label htmlFor="lastname"></label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your Lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-in-out"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-in-out"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-in-out"
              />
            </div>

            <button onClick={() => navigate("/")} type="submit" className="flex items-center text-white hover:bg-slate-200 hover:text-black hover:border-2 hover:border-gray-700 bg-slate-500 p-3 mt-5 rounded-3xl">Continue <IoLogInSharp />
            </button>

          </form>
        </div>
      </main>
    </div>
  );
};

export default AuthenticationPage;
