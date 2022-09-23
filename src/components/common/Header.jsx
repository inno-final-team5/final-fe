import React from "react";
import LogoBox from "./LogoBox";
import tw from "tailwind-styled-components/";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeLink = `font-bold text-mYellow`;
  const normalLink = ``;

  return (
    <div className="flex items-center sticky top-0 bg-mBlack">
      <LogoBox />
      <div className="w-full ml-4 py-2.5 flex items-center justify-between border border-mYellow border-none bg-mGray rounded-lg">
        <ul className="flex ml-10">
          <MenuTitle>영화 검색</MenuTitle>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuTitle>
            <NavLink
              to="/challenge"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              챌린지
            </NavLink>
          </MenuTitle>
          <MenuTitle>
            <NavLink
              to="/mypage/favorites"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              마이 페이지
            </NavLink>
          </MenuTitle>
        </ul>
        <ul className="flex mr-10">
          <MenuTitle>
            <Link to={"/signin"}>로그인</Link>
          </MenuTitle>
          <MenuTitle>
            <Link to={"/signup"}>회원가입</Link>
          </MenuTitle>
        </ul>
      </div>
    </div>
  );
};

const MenuTitle = tw.li`
  mr-10 last:mr-0 text-xl text-mCream hover:text-mYellow cursor-pointer 
  
`;
export default Header;
