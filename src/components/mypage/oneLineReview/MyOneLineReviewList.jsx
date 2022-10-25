import { getMyOneLineReviews } from "apis/oneLineReviewApi";
import Empty from "components/common/Empty";
import Pagination from "components/common/pagination/Pagination";
import Spinner from "components/common/Spinner";
import OneLineReviewItem from "components/mypage/oneLineReview/OneLineReviewItem";
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
    <MyReviewContainer>
      <OneLineReviewList>
        {content}
        <Pagination
          page={pageNum}
          setPage={setPageNum}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
      </OneLineReviewList>
    </MyReviewContainer>
  );
};

const MyReviewContainer = tw.div`
  bg-mBlack
`;

const OneLineReviewList = tw.div`
 h-full md:min-h-[28rem]
`;

export default MyOneLineReviewList;
