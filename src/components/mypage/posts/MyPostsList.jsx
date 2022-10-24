import React, { useState } from "react";
import Spinner from "components/common/Spinner";
import Empty from "components/common/Empty";
import tw from "tailwind-styled-components";
import PostItem from "./PostItem";
import Pagination from "components/common/pagination/Pagination";
import { getMyPosts } from "apis/postApi";
import { useQuery } from "react-query";

const MyPostsList = () => {
  const postsPerPage = 5;
  const [pageNum, setPageNum] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data: myPosts,
  } = useQuery("myPosts", getMyPosts, {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  if (myPosts.data.length < 1) {
    return (
      <Empty title="작성한 게시글이 없어요." detail="게시글을 작성해주세요" />
    );
  }
  const indexOfLast = pageNum * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (myPosts) => {
    let currentPosts = 0;
    currentPosts = myPosts.data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const content = currentPosts(myPosts).map((post) => (
    <PostItem key={post.postId} post={post} />
  ));
  const totalPages = Math.ceil(myPosts.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <MyPostContainer>
      <PostsList>
        {content}
        <Pagination
          page={pageNum}
          setPage={setPageNum}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
      </PostsList>
    </MyPostContainer>
  );
};

const MyPostContainer = tw.div`
  bg-mBlack
`;

const PostsList = tw.div`
h-full md:min-h-[28rem] 
`;

export default MyPostsList;
