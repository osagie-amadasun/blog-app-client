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

  // Get token from storage
  const token = localStorage.getItem("token");
  let userId;
  let userEmail;
//----------------------------------------------
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId;
      userEmail = decodedToken.email;
    } catch (error) {
      console.error("Invalid token: ", error);
    }
  }

  // Fetching blog data from API
  const fetchSingleBlog = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/posts/getPost/${id}`
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
          email: userEmail,
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

  const handleDeleteComment = async (commentId) => {
    await axios
      .delete(
        `http://localhost:5000/api/comments/deleteComment/${commentId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      // This is to update state by filtering out the deleted comment
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className=" mx-auto px-4 py-3 min-h-screen w-full h-full bg-[#191a1a] animate-fade-in" style={{
      backgroundImage: `
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `,
      backgroundSize: "55px 55px",
    }}>
      <Navbar />
      {blog && (
        <div className="bg-yellow-300 rounded-3xl mt-10 px-4 py-8">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-sm font-medium">
            created by {blog.user?.name || "Anonymous"}
          </p>
          <p className="text-gray-700">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4">{blog.content}</p>
          <div className="mt-40">
            <h2 className="text-2xl font-bold">Comments</h2>
            {/* "Add Comment" section */}
            <div className="mt-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              ></textarea>
              <button
                onClick={handleAddComment}
                className="mt-4 px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-transform hover:scale-105"
              >
                Add Comment
              </button>
              {/* Comments section fetched from the database */}
              <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-100 rounded-2xl p-2 border-2 border-slate-500 animate-fade-in">
                  <p className="font-bold">{comment.user?.name || "Anonymous"}</p>
                  <p>{comment.message}</p>
                  {/* delete button */}
                  {comment.user?.id === userId && (
                     <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="mt-2 px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-transform hover:scale-105"
                    >
                      Delete
                    </button>
                  )}
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
