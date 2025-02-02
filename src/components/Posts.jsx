import React, { useState, useEffect } from "react";
import axios from "axios"

function Posts({ title, body, author, date }) {
  const [posts, setPosts] = useState([]);
  const API_URL = "https://blog-app-server-0i1w.onrender.com:5000/api/posts/getPosts";
  const getPost = () => {
    axios.get(API_URL)
    .then(res => {
      console.log(res.data.posts[1].body);
      setPosts(res.data.posts[1].body);
    }).catch(err => {
      console.error(err);
    })
  }
  const controller = new AbortController();

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_URL, {signal: controller.signal});
      const data = await response.json();
      setPosts(data);
    }
    getData();
    console.log(posts, "posts");
    return () => {
      controller.abort()
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm mb-4">
        By {author} on {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-gray-800">posts</p>
      <button onClick={getPost} className="border-2 p-3 bg-pink-600">Get Quote</button>
    </div>
  );
}

export default Posts;
