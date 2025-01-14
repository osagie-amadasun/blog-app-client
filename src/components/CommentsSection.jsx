import React, { useState } from "react";

const Comment = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className="border-l-2 pl-4 my-2">
      <div className="bg-gray-100 p-3 rounded-md shadow-sm">
        <p className="font-semibold">{comment.author}</p>
        <p>{comment.text}</p>
        <div className="mt-2 flex items-center space-x-3 text-sm text-gray-500">
          <button
            className="hover:text-blue-500"
            onClick={() => setShowReplyBox(!showReplyBox)}
          >
            Reply
          </button>
        </div>
      </div>
      {showReplyBox && (
        <div className="mt-3">
          <textarea
            className="w-full border rounded-md p-2"
            rows="2"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
          />
          <button
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleReply}
          >
            Submit
          </button>
        </div>
      )}
      {/* Render Replies */}
      {comment.replies.length > 0 && (
        <div className="ml-4 mt-4">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} addReply={addReply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alice",
      text: "This is the first comment.",
      replies: [],
    },
    {
      id: 2,
      author: "Bob",
      text: "This is the second comment.",
      replies: [
        {
          id: 3,
          author: "Charlie",
          text: "This is a nested reply.",
          replies: [],
        },
      ],
    },
  ]);

  const addReply = (parentId, text) => {
    const newReply = {
      id: Date.now(),
      author: "You",
      text,
      replies: [],
    };

    const addNestedReply = (comments) =>
      comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : { ...comment, replies: addNestedReply(comment.replies) }
      );

    setComments(addNestedReply(comments));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
