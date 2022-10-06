import { useState } from "react";
import { useQuery } from "react-query";

import TableHead from "./TableHead";
import TableItem from "./TableItem";

import Spinner from "components/common/Spinner";
import WriteBox from "./WriteBox";
import Pagination from "components/common/pagination/Pagination";

const ReviewList = ({ queryFn }) => {
  const postsPerPage = 10;
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data: posts } = useQuery("posts", queryFn);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const indexOfLast = page * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const content = currentPosts(posts).map((post) => (
    <TableItem key={post.postId} post={post} />
  ));

  const totalPages = Math.ceil(posts.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="shadow-md m-4 mt-6">
      <table className="w-full bg-mBlack text-mWhite text-left border-collapse table-fixed rounded-t-xl">
        <TableHead />
        <tbody>{content}</tbody>
      </table>
      <div className="flex justify-between bg-mBlack border-t-2 border-mGray border-solid rounded-b-xl">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
        <WriteBox />
      </div>
    </div>
  );
};
export default ReviewList;
