import React from "react";
import Profile from "../Profile";
import LogoutButton from "./LogoutButton";
import LoginBox from "./LoginBox";
import { communityLinks } from "./MyLinks";
import NavMainMenu from "./NavMainMenu";
import NavSubLinks from "./NavSubLinks";
import { myLinks } from "./MyLinks";
const MobileNavbar = ({ open, accessToken, logoutHandler }) => {
  return (
    <ul
      className={`
          lg:hidden bg-mBlack absolute w-full h-screen bottom-0 py-24 pl-4 top-0 
          duration-500 ${open ? "left-0" : "left-[-120%]"} `}
    >
      <div>
        {accessToken != null ? (
          <div>
            <div className="w-full flex items-center justify-between pr-8 ">
              <div className="flex items-center">
                <Profile />
              </div>
              <LogoutButton logoutHandler={logoutHandler} />
            </div>
            <div className="text-mCream">
              <div className="pl-8 md:hidden">
                <NavSubLinks links={myLinks} />
              </div>
            </div>
          </div>
        ) : (
          <LoginBox />
        )}
      </div>
      <div className="pl-3">
        <NavMainMenu link={"/search"} name={"영화 검색"} />
        <h1 className="text-mCream cursor-default">커뮤니티</h1>
        <div className="pl-4">
          <NavSubLinks links={communityLinks} />
        </div>
        <NavMainMenu link={"/challenge"} name={"챌린지"} />
      </div>
    </ul>
  );
};

export default MobileNavbar;
