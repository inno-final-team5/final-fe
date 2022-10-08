import Profile from "components/common/Profile";
import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ post }) => {
  return (
    <tr key={post.postId}>
      <td className="py-4 px-3  text-mWhite whitespace-nowrap  ">
        {post.postCategory}
      </td>
      <td className="py-4 px-6 truncate">
        <Link
          to={`/community/detail/${post.postId}`}
          className="hover:text-mYellow"
        >
          {post.postTitle}
        </Link>
      </td>
      <td className="py-4 px-3 whitespace-nowrap w-[400px]">
        <Profile />
        {post.nickname}
      </td>
      <td className="py-4 px-2 w-4">
        {new Date(post.createdAt).toLocaleDateString("ko-KR")}
      </td>
    </tr>
  );
};

export default TableItem;
