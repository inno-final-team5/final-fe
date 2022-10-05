import { useState } from "react";
import { useQuery } from "react-query";

import PageButton from "./PageButton";
import TableHead from "./TableHead";
import TableItem from "./TableItem";

import {
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from "react-icons/bs";
import ArrowButton from "./ArrowButton";
import Spinner from "components/common/Spinner";
import WriteBox from "./WriteBox";

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

  const firstPage = () => setPage(1);
  const PrevPage = () => setPage(page - 1);
  const NextPage = () => setPage(page + 1);

  const lastPage = () => setPage(totalPages);

  const Pagination = (
    <div className="flex justify-between bg-mBlack border-t-2 border-mGray border-solid rounded-b-xl">
      <nav className="flex items-center  ">
        <ArrowButton
          onClick={firstPage}
          disabled={page === 1}
          icon={<BsChevronDoubleLeft />}
        />
        <ArrowButton
          onClick={PrevPage}
          disabled={page === 1}
          icon={<BsChevronLeft />}
        ></ArrowButton>
        {pagesArray.map((pg) => (
          <PageButton key={pg} page={pg} setPage={setPage} />
        ))}
        <ArrowButton
          onClick={NextPage}
          disabled={page === totalPages}
          icon={<BsChevronRight />}
        />
        <ArrowButton
          onClick={lastPage}
          disabled={page === totalPages}
          icon={<BsChevronDoubleRight />}
        />
      </nav>
      <WriteBox />
    </div>
  );

  return (
    <div className=" bg-mGray p-4 rounded-xl">
      <div className="shadow-md m-4 mt-6">
        <table className="w-full bg-mBlack text-mWhite text-left border-collapse table-fixed rounded-t-xl">
          <TableHead />
          <tbody>{content}</tbody>
        </table>
        {Pagination}
      </div>
    </div>
  );
};
export default ReviewList;
