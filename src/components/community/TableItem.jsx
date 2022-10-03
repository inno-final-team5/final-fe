import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ post }) => {
  return (
    <tr key={post.postId}>
      <th className="py-4 px-6 font-medium text-mWhite whitespace-nowrap">
        {post.postCategory}
      </th>
      <td className="py-4 px-6">
        <Link
          to={`/community/detail/${post.postId}`}
          className="hover:text-mYellow"
        >
          {post.postTitle}
        </Link>
      </td>
      <td className="py-4 px-6">{post.nickname}</td>
      <td className="py-4 px-6">
        {new Date(post.createdAt).toLocaleDateString("ko-KR")}
      </td>
    </tr>
  );
};

export default TableItem;
