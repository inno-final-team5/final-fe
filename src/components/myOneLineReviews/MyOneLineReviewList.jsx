import { getMyOneLineReviews } from "apis/oneLineReviewApi";
import Empty from "components/common/Empty";
import Pagination from "components/community/pagination/Pagination";
import Spinner from "components/common/Spinner";
import OneLineReviewItem from "./OneLineReviewItem";
import React, { useState } from "react";
import { useQuery } from "react-query";
import tw from "tailwind-styled-components/";

const MyOneLineReviewList = () => {
  const reviewsPerPage = 5;
  const [pageNum, setPageNum] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: myOneLineReviews,
  } = useQuery("myOneLineReviews", getMyOneLineReviews, {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (myOneLineReviews.data.length < 1) {
    return (
      <Empty title="작성한 한줄평이 없어요." detail="한줄평을 작성해주세요" />
    );
  }

  const indexOfLast = pageNum * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;

  const currentPosts = (myOneLineReviews) => {
    let currentPosts = 0;
    currentPosts = myOneLineReviews.data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const content = currentPosts(myOneLineReviews).map((oneLineReview) => (
    <OneLineReviewItem
      key={oneLineReview.oneLineReviewId}
      oneLineReview={oneLineReview}
    />
  ));

  const totalPages = Math.ceil(myOneLineReviews.data.length / reviewsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <OneLineReviewList>
      {content}
      <Pagination
        page={pageNum}
        setPage={setPageNum}
        totalPages={totalPages}
        pagesArray={pagesArray}
      />
    </OneLineReviewList>
  );
};

const OneLineReviewList = tw.div`
  bg-mBlack min-h-[26rem] 
`;

export default MyOneLineReviewList;
