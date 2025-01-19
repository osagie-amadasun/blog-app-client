import React, { useState } from 'react';
import axios from 'axios';

const AdminPostCreator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleCreatePost = async () => {
    try {
      const token = localStorage.getItem('token'); // Get JWT token from storage
      const response = await axios.post(
        '/api/admin/posts',
        { title, content, authorId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Post created successfully!');
      setTitle('');
      setContent('');
      setAuthorId('');
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Author ID</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleCreatePost}
      >
        Create Post
      </button>
    </div>
  );
};

export default AdminPostCreator;
