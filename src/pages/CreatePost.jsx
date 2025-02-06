import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//-----------------ADMIN FOR CREATING POSTS------------------//

// raect quill modification to add an upload image option.
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
};

const CreatePost = () => {
  const location = useLocation();
  const existingBlog = location.state?.blog; // Check if there is pre-filled data from the blog post to edit.
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [author, setAuthor] = useState(existingBlog?.author || "");
  const [content, setContent] = useState(existingBlog?.content || "");

  //Get user id from JWT token
  const token = localStorage.getItem("token");
  let userId;
  //----------------------------------------------
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId;
    } catch (error) {
      console.error("Invalid token: ", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Sanitize the content to prevent XSS attacks------still kinda buggy sha
    const sanitize = sanitizeHtml(content, {
      allowedTags: ["b", "i", "em", "strong", "a", "img"],
      allowedAttributes: {
        a: ["href", "target"],
        img: ["src", "alt"],
      },
    });
  
    // Collect data from inputs
    const postData = {
      title,
      author,
      content: sanitize,
      userId: userId,
    };
  
    try {
      let response;
      
      if (existingBlog) {
        // 🔹 EDIT Mode: Send a PUT request to update the post
        response = await axios.put(
          `${VITE_API_BASE_URL}/api/posts/updatePost/${existingBlog.id}`,
          postData
        );
        console.log("Blog post updated successfully", response.data);
      } else {
        // 🔹 CREATE Mode: Send a POST request to create a new post
        response = await axios.post(
          `${VITE_API_BASE_URL}/api/posts/createPost/${userId}`,
          postData
        );
        console.log("Blog post created successfully", response.data);
      }
  
      // Reset fields/clear fields after successful submission
      setTitle("");
      setAuthor("");
      setContent("");
  
    } catch (error) {
      console.error(
        "Error creating/updating post:",
        error.response?.data || error.message
      );
    }
  };
  

  return (
    <div
      className=" mx-auto px-4 py-3 w-full min-h-screen bg-[#191a1a]"
      style={{
        backgroundImage: `
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `,
        backgroundSize: "55px 55px",
      }}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-yellow-300 shadow-md rounded-3xl mt-10 animate-fade-in">
        <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm"
              placeholder="Enter a title for this post..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm"
              value={author}
              placeholder="Enter your name..."
              onChange={(e) => setAuthor(e.target.value)}
              required
              //remember to put a "required attribute here later down the line"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>

            <ReactQuill
              modules={modules}
              id="content"
              theme="snow"
              value={content}
              onChange={setContent} //update the WYSIWYG editor
              className="mt-1"
              placeholder="Write your post here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-transform hover:scale-105"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
