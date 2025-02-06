import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { CgOptions } from "react-icons/cg";
import { RiFileEditLine } from "react-icons/ri";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch data from backend
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${VITE_API_BASE_URL}/api/posts/getPosts`
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch blogs.");
    } finally {
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
    <div
      className=" mx-auto px-4 py-3 min-h-screen w-full h-full bg-[#191a1a]"
      style={{
        backgroundImage: `
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `,
        backgroundSize: "55px 55px",
      }}
    >
      <Navbar />
      <h1 className="text-3xl text-white font-bold mt-10 mb-8">Latest Blogs</h1>

      {/* Loading State */}
      {loading && <div className="text-center">Loading blogs...</div>}
      {/* Error State */}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {/* No Blogs Found */}
      {!loading && !error && posts.length === 0 && (
        <div className="text-center mt-4">
          <p className="text-gray-500">No blogs found. Check back later!</p>
        </div>
      )}

      {/* Render Blogs (if they exist) */}
      {!loading && !error && posts.length > 0 && (
        <div className="space-y-6">
          {posts.map((blog, index) => (
            <div
              key={blog.id}
              className={`p-4 flex justify-between border rounded-3xl shadow-sm bg-yellow-300 hover:shadow-md transition animate-fade-in opacity-0 `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div>
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-sm font-medium">
                  By {blog.user?.name || "Unknown Author"}
                </p>
                <p className="text-gray-600 text-sm">
                  Published on {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-4 text-gray-700">
                  {blog.content.slice(0, 150)}...
                </p>
                <button
                  className="mt-4 px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-transform hover:scale-105"
                  onClick={() => navigate(`detailedBlog/${blog.id}`)}
                >
                  Read More
                </button>
              </div>

              {/* Options Menu */}
              {/* <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <CgOptions className="text-xl cursor-pointer" />

                
                {isOpen && (
                  <div className="absolute right-0 w-48 mt-2 bg-white border-2 border-black rounded-xl shadow-lg">
                    <div className="gap-3 px-4 py-2">
                      <button className="flex items-center justify-center gap-3 w-full rounded-xl bg-black text-white py-2">
                        <RiFileEditLine className="text-xl cursor-pointer" />
                        <p>Edit Blog</p>
                      </button>
                    </div>
                    <div className="px-4 py-2">
                      <button className="w-full rounded-xl bg-black text-white py-2">
                        Delete Blog
                      </button>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
