import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ post }) => {
  return (
    <tr key={post.postId}>
      <td className="py-4 px-6 font-medium text-mWhite whitespace-nowrap w-12">
        {post.postCategory}
      </td>
      <td className="py-4 px-6 truncate ">
        <Link
          to={`/community/detail/${post.postId}`}
          className="hover:text-mYellow"
        >
          {post.postTitle}
        </Link>
      </td>
      <td className="py-4 px-6 w-5 truncate">{post.nickname}</td>
      <td className="py-4 px-6 w-5">
        {new Date(post.createdAt).toLocaleDateString("ko-KR")}
      </td>
    </tr>
  );
};

export default TableItem;
