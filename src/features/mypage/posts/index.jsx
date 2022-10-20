import React, { useState } from "react";
import useMyPosts from "./useMyPosts";
import Spinner from "components/common/Spinner";
import Empty from "components/common/Empty";
import tw from "tailwind-styled-components";
import PostItem from "./PostItem";
import Pagination from "components/common/pagination/Pagination";

const MyPostsSection = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data: myPosts, isLoading } = useMyPosts(pageNum);
  console.log(myPosts);

  // const postsPerPage = 10;
  // const [page, setPage] = useState(1);
  // const indexOfLast = page * postsPerPage;
  // const indexOfFirst = indexOfLast - postsPerPage;
  // const currentPosts = (myPosts) => {
  //   let currentPosts = 0;
  //   currentPosts = myPosts.data.slice(indexOfFirst, indexOfLast);
  //   return currentPosts;
  // };
  // const content = currentPosts(myPosts).map((post) => (
  //   <PostItem key={post.postId} post={post} />
  // ));
  // const totalPages = Math.ceil(myPosts.data.length / postsPerPage);

  // const pagesArray = Array(totalPages)
  //   .fill()
  //   .map((_, index) => index + 1);

  return (
    <MyPostContainer>
      {isLoading || !myPosts ? (
        <Spinner />
      ) : myPosts.data.length < 1 ? (
        <Empty title="작성한 게시글이 없어요." detail="게시글을 작성해주세요" />
      ) : (
        <MyPostsList>
          {myPosts.data.map((post) => (
            <PostItem key={post.postId} post={post} />
          ))}

          {/* <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            pagesArray={pagesArray}
          /> */}
        </MyPostsList>
      )}
    </MyPostContainer>
  );
};

const MyPostContainer = tw.div`
  bg-mBlack
`;

const MyPostsList = tw.div`
h-full md:min-h-[28rem]
`;

export default MyPostsSection;
