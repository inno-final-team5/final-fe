import MyPageContainer from "components/mypage/MyPageContainer";
import Leave from "features/mypage/info/Leave";
import NicknameChange from "features/mypage/info/NicknameChange";
import React from "react";

const MyInfo = () => {
  return (
    <MyPageContainer>
      <NicknameChange />
      <Leave />
    </MyPageContainer>
  );
};

export default MyInfo;
