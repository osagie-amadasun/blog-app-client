import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import CommentsSection from "../components/CommentsSection";


function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of the first post.",
      author: "Jane Doe",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "Another Day, Another Post",
      content: "Here is some more content.",
      author: "John Doe",
      date: "2025-01-11",
    },
    // Add more posts as needed
  ];
  const [commentsData, setCommentsData] = useState();

  return (
    <div>
      <Navbar />

      <main>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">My Blog</h1>
          {posts.map((post) => (
            <Posts
              key={post.id}
              title={post.title}
              body={post.body}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>
      </main>
      {/* -------------comments section------------- */}
      <CommentsSection />

    </div>
  );
}

export default BlogPage;
