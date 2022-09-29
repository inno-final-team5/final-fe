import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import TableHead from "./TableHead";

const ReviewList = ({ queryFn }) => {
  const { isLoading, isError, error, data: posts } = useQuery("posts", queryFn);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
    return <div>{content}</div>;
  } else if (isError) {
    content = <p>{error.message}</p>;
    return <div>{content}</div>;
  } else {
    content = posts.data.map((post) => {
      return (
        <tr key={post.postId}>
          <th className="py-4 px-6 font-medium text-mWhite whitespace-nowrap">
            {post.postCategory}
          </th>
          <td className="py-4 px-6">
            <Link to={`/community/detail`} className="hover:text-mYellow">
              {post.postTitle}
            </Link>
          </td>
          <td className="py-4 px-6">{post.nickname}</td>
          <td className="py-4 px-6">
            {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </td>
        </tr>
      );
    });
  }

  return (
    <div className=" bg-mGray p-4 rounded-sm">
      <div className="shadow-md sm:rounded-lg m-4 mt-6">
        <table className="w-full bg-mBlack text-mWhite text-left">
          <TableHead />
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ReviewList;
