import React from "react";
import "./post.css";
const Post = ({ postData }) => {
  console.log(postData);
  return (
    <div className="post">
      <h1>{postData.title}</h1>
      <h3>{postData.body}</h3>
    </div>
  );
};

export default Post;
