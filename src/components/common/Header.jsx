import React, { useEffect } from "react";
import LogoBox from "./LogoBox";
import tw from "tailwind-styled-components/";
import { FaBell } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  console.log("test중입니다!");

  const logout = () => {
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("accessToken");
  };
  // useEffect(() => {
  //   logout();
  // }, []);
  return (
    <div>
      {/* <div className="flex items-center">
      <LogoBox />
      <div className="w-full ml-4 py-2.5 flex items-center justify-between border border-mYellow border-none bg-mGray rounded-lg">
        <ul className="flex ml-10">
          <MenuTitle>영화 검색</MenuTitle>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuTitle>챌린지</MenuTitle>
          <MenuTitle>
            <NavLink to="/mypage/favorites">마이 페이지</NavLink>
          </MenuTitle>
        </ul>
        <ul className="flex mr-10">
          <Link to={'/signin'}>
            <MenuTitle>로그인</MenuTitle>
          </Link>
          <Link to={'/signup'}>
            <MenuTitle>회원가입</MenuTitle>
          </Link>
        </ul>
      </div>
    </div> */}

      {localStorage.length ? (
        <div className="flex items-center">
          <LogoBox />
          <div className="w-full ml-4 py-2.5 flex items-center justify-between border border-mYellow border-none bg-mGray rounded-lg">
            <ul className="flex ml-10">
              <MenuTitle>영화 검색</MenuTitle>
              <MenuTitle>커뮤니티</MenuTitle>
              <MenuTitle>챌린지</MenuTitle>
              <MenuTitle>
                <NavLink to="/mypage/favorites">마이 페이지</NavLink>
              </MenuTitle>
            </ul>
            <ul className="flex mr-10">
              <MenuTitle>## 평론가님 환영합니다!</MenuTitle>
              <MenuTitle
                onClick={() => {
                  logout();
                }}
              >
                로그아웃
              </MenuTitle>
              <MenuTitle>
                <FaBell />
              </MenuTitle>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <LogoBox />
          <div className="w-full ml-4 py-2.5 flex items-center justify-between border border-none bg-mGray rounded-lg">
            <ul className="flex ml-10">
              <MenuTitle>영화 검색</MenuTitle>
              <MenuTitle>커뮤니티</MenuTitle>
              <MenuTitle>챌린지</MenuTitle>
              <MenuTitle>
                <NavLink to="/mypage/favorites">마이 페이지</NavLink>
              </MenuTitle>
            </ul>
            <ul className="flex mr-10">
              <Link to={"/signin"}>
                <MenuTitle>로그인</MenuTitle>
              </Link>
              <Link to={"/signup"}>
                <MenuTitle>회원가입</MenuTitle>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuTitle = tw.li`
  mr-10 last:mr-0 text-xl font-bold text-mCream hover:text-mYellow cursor-pointer 
  
`;
export default Header;
