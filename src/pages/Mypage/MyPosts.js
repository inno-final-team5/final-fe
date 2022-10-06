import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { getMyPosts } from "apis/postApi";
import Spinner from "components/common/Spinner";
import PostItem from "components/mypage/PostItem";
import Pagination from "components/common/pagination/Pagination";
import Empty from "components/common/Empty";
import tw from "tailwind-styled-components";
const MyPosts = () => {
  const postsPerPage = 10;
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: myPosts,
  } = useQuery("myPosts", getMyPosts);

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

  const indexOfLast = page * postsPerPage;
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
    <Fragment>
      <MyPostsList>
        {content}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />
      </MyPostsList>
    </Fragment>
  );
};

const MyPostsList = tw.div`
h-screen
`;

export default MyPosts;
