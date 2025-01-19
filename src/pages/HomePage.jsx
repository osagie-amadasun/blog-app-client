import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/posts/getPosts"
      );
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch blogs.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Fetch once when the component mounts

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-3xl text-white font-bold mt-10 mb-8">Latest Blogs</h1>
      <div className="space-y-6">
        {posts.map((blog) => (
          <div
            key={blog.id}
            className="p-6 border rounded-3xl shadow-sm bg-yellow-300 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 text-sm">
              Published on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-4 text-gray-700">
              {blog.content.slice(0, 150)}...
            </p>
            <button
              className="mt-4 px-4 py-2 border-2 border-black rounded-xl hover:bg-white hover:text-black transition"
              onClick={() => navigate(`detailedBlog/${blog.id}`)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
