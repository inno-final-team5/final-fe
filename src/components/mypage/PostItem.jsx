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
        className="flex bg-mGray gap-2 w-full rounded-xl my-6 flex-col md:flex-row p-2 items-center"
      >
        <div className="md:pl-4 flex justify-start items-center w-full md:basis-2/12">
          <p className="w-16 text-mWhite bg-mBlack rounded-lg p-2 text-center">
            {post.postCategory}
          </p>
        </div>
        <div className="w-full truncate text-mWhite items-center md:basis-8/12">
          <p className="text-left">{post.postTitle}</p>
        </div>

        <div className="justify-end w-full flex md:basis-3/12">
          <p className="w-28 text-mWhite text-start">
            {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
