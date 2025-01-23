import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup
        ? "https://blog-app-server-0i1w.onrender.com/api/users/signup"
        : "https://blog-app-server-0i1w.onrender.com/api/users/login";
        //interesting refactoring idea i saw from some guy online but didn't quite work well in my case:
        //const endpoint = `${API_BASE_URL}/users/${isSignup ? "signup" : "login"}`;
      const response = await axios.post(endpoint, formData);
      if (!formData.email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      console.log("Login successful", response.data);
      //store token in local storage
      localStorage.setItem("token", response.data.token);
      // Reset fields/clear fields after succesfull submission
      setFormData({ name: "", email: "", password: "" });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Please use a valid email and password.");
    } finally {
      setLoading(false);
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
            disabled={loading}
          >
            {loading ? "Processing..." : isSignup ? "Signup" : "Login"}
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
