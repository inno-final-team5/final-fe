import Spinner from "components/common/Spinner";
import useSearchKeyword from "components/community/useSearchKeyword";
import React from "react";
import { useParams } from "react-router-dom";

const CommunitySearchResult = () => {
  const params = useParams();
  const keyword = params.keyword;
  console.log(keyword);
  const {
    isLoading,
    isError,
    error,
    data: searchedList,
  } = useSearchKeyword(keyword);

  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;
  else {
    console.log(searchedList);
  }

  return <div></div>;
};

export default CommunitySearchResult;
