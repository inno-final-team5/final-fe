import React from "react";
import MyPostsSection from "components/mypage/posts";
import MyPageContainer from "components/mypage/MyPageContainer";

const MyPosts = () => {
  return (
    <MyPageContainer>
      <MyPostsSection />
    </MyPageContainer>
  );
};

export default MyPosts;
