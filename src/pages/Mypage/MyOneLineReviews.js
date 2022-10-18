import { getMyOneLineReviews } from "apis/oneLineReviewApi";
import Empty from "components/common/Empty";
import Pagination from "components/common/pagination/Pagination";
import Spinner from "components/common/Spinner";
import OneLineReviewItem from "components/mypage/OneLineReviewItem";
import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import tw from "tailwind-styled-components/";

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

  if (myOneLineReviews.data.length < 1) {
    return (
      <Empty title="작성한 한줄평이 없어요." detail="한줄평을 작성해주세요" />
    );
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
      key={oneLineReview.oneLineReviewId}
      oneLineReview={oneLineReview}
    />
  ));

  const totalPages = Math.ceil(myOneLineReviews.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <Fragment>
      <OneLineReviewList>
        {content}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
      </OneLineReviewList>
    </Fragment>
  );
};

const OneLineReviewList = tw.div`
h-full md:min-h-[28rem]
`;

export default MyOneLineReviews;
