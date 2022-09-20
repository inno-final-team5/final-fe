import React from "react";
import LogoBox from "./LogoBox";

const Header = () => {
  return (
    <div className="px-5 flex items-center">
      <LogoBox />
      <div className="w-full ml-5 py-2.5 flex items-center justify-between border border-solid border-mYellow">
        <ul className="flex ml-10">
          <li className="mr-10 last:mr-0 text-sm font-bold text-mCream hover:text-mYellow cursor-pointer">
            영화 검색
          </li>
          <li className="mr-10 last:mr-0 text-sm font-bold text-mCream hover:text-mYellow cursor-pointer">
            커뮤니티
          </li>
          <li className="mr-10 last:mr-0 text-sm font-bold text-mCream hover:text-mYellow cursor-pointer">
            챌린지
          </li>
          <li className="mr-10 last:mr-0 text-sm font-bold text-mCream hover:text-mYellow cursor-pointer">
            마이 페이지
          </li>
        </ul>
        <ul className="flex mr-10">
          <li className="mr-10 last:mr-0 text-xs font-bold text-mCream hover:text-mYellow cursor-pointer">
            로그인
          </li>
          <li className="mr-10 last:mr-0 text-xs font-bold text-mCream hover:text-mYellow cursor-pointer">
            회원가입
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
