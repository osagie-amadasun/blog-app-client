import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const BlogDetails = () => {
  const id = useParams().id;
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetching blog data from API
  const fetchSingleBlog = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/posts/getPost/${id}`
      );
      setBlog(result.data.post);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSingleBlog();
  }, [id]);

  const handleAddComment = async (e) => {
    axios
      .post(`http://localhost:5000/api/comments/createComment/${id}`, {
        message: newComment,
        postId: id,
      })
      .then((response) => {
        setComments([...comments, response.data.message]);
        setNewComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      {blog && (
        <div>
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-gray-700">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4">{blog.content}</p>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Comments</h2>
            <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-100 p-2 rounded">
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
