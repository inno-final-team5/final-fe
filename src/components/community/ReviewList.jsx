import { useQuery } from "react-query";
import { getPosts } from "apis/postApi";
import { Link } from "react-router-dom";

const ReviewList = ({ category }) => {
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery("posts", getPosts);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
    return <div>{content}</div>;
  } else if (isError) {
    content = <p>{error.message}</p>;
    return <div>{content}</div>;
  } else {
    content = posts
      .filter((post) => post.postCategory === category)
      .map((post) => {
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
            <td className="py-4 px-6">{post.createdAt}</td>
          </tr>
        );
      });
  }

  return (
    <div className=" bg-mGray p-4 rounded-sm">
      <div className="shadow-md sm:rounded-lg m-4 mt-6">
        <table className="w-full bg-mBlack text-mWhite text-left">
          <thead className="font-bold text-lg">
            <tr>
              <th scope="col" className="py-3 px-6">
                구분
              </th>
              <th scope="col" className="py-3 px-6">
                제목
              </th>
              <th scope="col" className="py-3 px-6">
                작성자
              </th>
              <th scope="col" className="py-3 px-6">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ReviewList;
