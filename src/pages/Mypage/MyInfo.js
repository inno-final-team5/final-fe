import MyPageContainer from "components/mypage/MyPageContainer";
import Leave from "components/mypage/info/Leave";
import NicknameChange from "components/mypage/info/NicknameChange";
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
