import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import Navbar from "../components/Navbar";

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
    };
    //Send postData to your backend
    try {
      const response = await axios.post(
        "https://blog-app-server-e905.onrender.com/api/posts/createPost",
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
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-yellow-300 shadow-md rounded-3xl mt-10">
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
            className="w-full border-2 border-black rounded-xl hover:bg-white hover:text-black transition"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
