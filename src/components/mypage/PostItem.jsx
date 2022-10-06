import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <Link
      to={`/community/detail/${post.postId}`}
      className="hover:text-mBlack hover:font-bold"
    >
      <div
        key={post.postId}
        className="flex bg-mGray gap-12 px-2 my-6 py-3 rounded-xl justify-between text-mGray items-center"
      >
        <div className="pl-4 flex justify-center items-center">
          <p className="w-16 text-mWhite bg-mBlack rounded-lg p-2 text-center">
            {post.postCategory}
          </p>
        </div>
        <div className="w-full truncate text-mWhite">{post.postTitle}</div>

        <div>
          <p className="w-28 text-mWhite">
            {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
