import React from "react";
import LogoBox from "./LogoBox";
import tw from "tailwind-styled-components/";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  const accessToken = localStorage.getItem("accessToken");
  const nickname = localStorage.getItem("nickname");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("nickname");
    alert("로그아웃 되셨습니다 ");
    navigate("/");
  };

  return (
    <div className="flex items-center">
      <LogoBox />
      <div className="w-full ml-4 py-2.5 flex items-center justify-between border border-mYellow border-none bg-mGray rounded-lg">
        <ul className="flex ml-10">
          <MenuTitle>영화 검색</MenuTitle>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuTitle>챌린지</MenuTitle>
        </ul>
        <ul className="flex mr-10">
          {accessToken != null ? (
            <>
              <Link to={"/mypage/favorites"}>
                <MenuTitle>{nickname}평론가님</MenuTitle>
              </Link>
              <button onClick={logoutHandler}>
                <MenuTitle>로그아웃</MenuTitle>
              </button>
              <button>
                <BsFillBellFill className="ml-4 text-yellow-500 hover:text-mCream" size={20} />
              </button>
            </>
          ) : (
            <>
              <Link to={"/signin"}>
                <MenuTitle>로그인</MenuTitle>
              </Link>
              <Link to={"/signup"}>
                <MenuTitle>회원가입</MenuTitle>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

const MenuTitle = tw.li`
  mr-10 last:mr-0 text-xl font-bold text-mCream ml-3 hover:text-mYellow cursor-pointer 
  
`;
export default Header;
