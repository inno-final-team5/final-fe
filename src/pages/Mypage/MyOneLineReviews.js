import { getMyOneLineReviews } from "apis/oneLineReviewApi";
import Pagination from "components/common/pagination/Pagination";
import Spinner from "components/common/Spinner";
import OneLineReviewItem from "components/mypage/OneLineReviewItem";
import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";

const MyOneLineReviews = () => {
  const postsPerPage = 10;
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: myOneLineReviews,
  } = useQuery("myOneLineReviews", getMyOneLineReviews);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const indexOfLast = page * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (myPosts) => {
    let currentPosts = 0;
    currentPosts = myPosts.data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const content = currentPosts(myOneLineReviews).map((oneLineReview) => (
    <OneLineReviewItem
      key={oneLineReview.postId}
      oneLineReview={oneLineReview}
    />
  ));

  const totalPages = Math.ceil(myOneLineReviews.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <Fragment>
      <section>
        {content}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
      </section>
    </Fragment>
  );
};

export default MyOneLineReviews;
