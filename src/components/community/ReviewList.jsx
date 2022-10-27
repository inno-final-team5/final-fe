import { useState } from "react";
import { useQuery } from "react-query";
import ReviewItem from "./ReviewItem";
import Spinner from "components/common/Spinner";
import Pagination from "components/community/pagination/Pagination";
import CommunityFooter from "./CommunityFooter";

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
    <ReviewItem key={post.postId} post={post} />
  ));

  const totalPages = Math.ceil(posts.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className="m-4 mt-6">
      {content}
      <CommunityFooter />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        pagesArray={pagesArray}
      />
    </div>
  );
};
export default ReviewList;
