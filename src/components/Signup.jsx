import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup
        ? "http://localhost:5000/api/users/signup"
        : "http://localhost:5000/api/users/login";
      const response = await axios.post(endpoint, formData);

      console.log("Signup/Login successful", response.data);
      // Reset fields/clear fields after succesfull submission
      setFormData({ name: "", email: "", password: "" });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">
          {isSignup ? "Signup" : "Login"}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {/* --------------FORM-------------- */}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
