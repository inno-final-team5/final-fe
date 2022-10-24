import { getSearchPosts } from "apis/postApi";
import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import ReviewItem from "./ReviewItem";
import BackButton from "components/common/BackButton";
const SearchList = ({ type, keyword }) => {
  console.log(type, keyword);
  const {
    isLoading,
    isError,
    error,
    data: searchedPosts,
  } = useQuery("keyword", () => getSearchPosts(type, keyword));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const content = searchedPosts.data.map((post) => (
    <ReviewItem key={post.postId} post={post} />
  ));
  return (
    <div className="text-mWhite">
      <div className="flex flex-row items-center w-full">
        <div className="basis-1/12 pl-2">
          <BackButton />
        </div>
        <div className="basis-11/12">
          <h2 className="py-4 text-center flex items-center justify-center">
            <span className="text-mYellow text-lg"> {keyword} </span> &nbsp;
            검색 결과입니다.
          </h2>
        </div>
      </div>

      {content}
    </div>
  );
};

export default SearchList;
