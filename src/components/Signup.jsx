import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: isSignup ? Yup.string().required("Username is required") : Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setError("");
      try {
        const endpoint = isSignup
          ? `${VITE_API_BASE_URL}/api/users/signup`
          : `${VITE_API_BASE_URL}/api/users/login`;
        const response = await axios.post(endpoint, values);

        localStorage.setItem("token", response.data.token);
        navigate("/");
        resetForm();
      } catch (err) {
        setError(
          err.response?.data?.message || "Please use a valid email and password."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      className=" mx-auto flex items-center justify-center px-4 py-3 min-h-screen w-full h-full bg-[#191a1a]"
      style={{
        backgroundImage: `
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `,
        backgroundSize: "55px 55px",
      }}
    >
      <div className="bg-yellow-300 p-8 rounded-3xl shadow-md w-96 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">
          {isSignup ? "Signup" : "Login"}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={formik.handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 w-full p-2 border-2 border-gray-300 rounded-xl"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full p-2 border-2 border-gray-300 rounded-xl"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full p-2 border-2 border-gray-300 rounded-xl"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-transform hover:scale-105"
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
