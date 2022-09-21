import React from "react";
import LogoBox from "./LogoBox";
import tw from "tailwind-styled-components/";

const Header = () => {
  return (
    <div className="px-5 flex items-center">
      <LogoBox />
      <div className="w-full ml-5 py-2.5 flex items-center justify-between border border-solid border-mYellow">
        <ul className="flex ml-10">
          <MenuTitle>영화 검색</MenuTitle>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuTitle>챌린지</MenuTitle>
          <MenuTitle>마이 페이지</MenuTitle>
        </ul>
        <ul className="flex mr-10">
          <MenuTitle>로그인</MenuTitle>
          <MenuTitle>회원가입</MenuTitle>
        </ul>
      </div>
    </div>
  );
};

const MenuTitle = tw.li`
  mr-10 last:mr-0 text-xs font-bold text-mCream hover:text-mYellow cursor-pointer
`;
export default Header;
