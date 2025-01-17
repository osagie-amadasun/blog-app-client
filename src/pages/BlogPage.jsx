import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CommentsSection from "../components/CommentsSection";


function BlogPage() {
  const [commentsData, setCommentsData] = useState();

  return (
    <div>
      <Navbar />

      <main>
        <div className="container mx-auto p-4">

        </div>
      </main>
      {/* -------------comments section------------- */}
      <CommentsSection />

    </div>
  );
}

export default BlogPage;
