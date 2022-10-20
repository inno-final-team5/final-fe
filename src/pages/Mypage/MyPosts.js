import React from "react";
import MyPostsSection from "features/mypage/posts";
import MyPageContainer from "components/mypage/MyPageContainer";

const MyPosts = () => {
  return (
    <MyPageContainer>
      <MyPostsSection />
    </MyPageContainer>
  );
};

export default MyPosts;
