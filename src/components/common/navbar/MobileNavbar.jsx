import React from "react";
import Profile from "../Profile";
import LogoutButton from "./LogoutButton";
import LoginBox from "./LoginBox";
import NavLinks from "./NavLinks";
import { communityLinks } from "./MyLinks";
import NavItem from "./NavItem";

const MobileNavbar = ({
  open,
  accessToken,
  nickname,
  logoutHandler,
  myLinks,
  badgeIcon,
}) => {
  return (
    <ul
      className={`
          md:hidden bg-mBlack absolute w-3/4 h-screen bottom-0 py-24 pl-4 top-0 
          duration-500 ${open ? "left-0" : "left-[-120%]"} `}
    >
      <div>
        {accessToken != null ? (
          <div>
            <div className="w-full flex items-center justify-between pr-8 ">
              <div className="flex items-center">
                <Profile badgeIcon={badgeIcon} />
                <span className="text-mYellow "> {nickname} 평론가님</span>
              </div>
              <LogoutButton logoutHandler={logoutHandler} />
            </div>
            <div className="text-mCream">
              <div className="pl-8 md:hidden">
                <NavLinks links={myLinks} />
              </div>
            </div>
          </div>
        ) : (
          <LoginBox />
        )}
      </div>
      <div className="pl-3">
        <NavItem link={"/search"} name={"영화 검색"} />
        <h1 className="text-mCream cursor-default">커뮤니티</h1>
        <div className="pl-4">
          <NavLinks links={communityLinks} />
        </div>

        <NavItem link={"/challenge"} name={"챌린지"} />
      </div>
    </ul>
  );
};

export default MobileNavbar;
