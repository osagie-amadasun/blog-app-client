import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";

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
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

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
    e.preventDefault(); //prevent default submission behaviour from reloading the page.

    //sanitize the content to prevent xss attacks
    const sanitize = sanitizeHtml(content, {
      allowedTags: ["b", "i", "em", "strong", "a", "img"],
      allowedAttributes: {
         a: ["href", "target"],
        img: ["src", "alt"],
      },
      });

    //collect data from inputs
    const postData = {
      title,
      author,
      content: sanitize,
      userId: userId
    };
    //Send postData to your backend
    try {
      const response = await axios.post(
        `https://blog-app-server-0i1w.onrender.com/api/posts/createPost/${userId}`,
        postData
      );
      console.log("Blog post created succesfully", response.data);
      // Reset fields/clear fields after succesfull submission
      setTitle("");
      setAuthor("");
      setContent("");
    } catch (error) {
      console.error(
        "Error creating post:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className=" mx-auto px-4 py-3 w-full min-h-screen bg-[#191a1a]" style={{
      backgroundImage: `
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `,
      backgroundSize: "55px 55px",
    }}>
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
