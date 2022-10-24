import React from "react";
import MyPostsList from "components/mypage/posts/MyPostsList";
import MyPageContainer from "components/mypage/MyPageContainer";

const MyPosts = () => {
  return (
    <MyPageContainer>
      <MyPostsList />
    </MyPageContainer>
  );
};

export default MyPosts;
