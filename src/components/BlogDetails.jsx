import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {jwtDecode} from "jwt-decode";

const BlogDetails = () => {
  const id = useParams().id;
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  // Get user id from JWT token
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

  // Fetching blog data from API
  const fetchSingleBlog = async () => {
    try {
      const result = await axios.get(
        `https://blog-app-server-e905.onrender.com/api/posts/getPost/${id}`
      );
      setBlog(result.data.post);
    } catch (error) {
      console.error("Error fetching blog data: ", error);
    }
  };

  // Fetching comments data from API
  const fetchComments = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/comments/getComments/${id}`);
      setComments(result.data.comments);
    } catch (error) {
      console.error("Error fetching comments data: ", error);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    await axios
      .post(
        `http://localhost:5000/api/comments/createComment/${id}`,
        {
          user: userId,
          post: id,
          email: "osagieamadasun123@gmail.com",
          message: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        setComments([...comments, response.data.createdComment]);
        setNewComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container mx-auto">
      <Navbar />
      {blog && (
        <div className="bg-yellow-300 rounded-3xl mt-10 px-4 py-8">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-gray-700">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4">{blog.content}</p>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Comments</h2>
            {/* "Add Comment" section */}
            <div className="mt-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                onClick={handleAddComment}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add Comment
              </button>
              {/* Comments section fetched from the database */}
              <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-100 p-2 rounded">
                  <p>{comment.message}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
