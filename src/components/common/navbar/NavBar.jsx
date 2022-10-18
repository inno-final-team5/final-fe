import { useState } from "react";
import Logo from "images/Logo2.png";
import { Link } from "react-router-dom";
import NavMainLinks from "./NavMainLinks";
import { MdClose, MdMenu } from "react-icons/md";
import LoginBox from "./LoginBox";

import { myLinks, navigationLinks } from "./MyLinks";
import LogoutButton from "./LogoutButton";
import ModalButton from "components/Modal/ModalButton";
import Alarm from "../Alarm";
import Profile from "../Profile";
import MobileNavbar from "./MobileNavbar";
import NavMainMenu from "./NavMainMenu";
import { BsFillBellFill } from "react-icons/bs";

const NavBar = ({ badgeIcon, nickname, accessToken, logoutHandler }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-mBlack fixed top-0 z-50 left-0 w-full mx-auto lg:px-40 justify-center md:px-12">
      <div className="flex items-center justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between p-5 md:px-2 md:py-0 items-center">
          <div className="text-3xl md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-mYellow">
              {open ? <MdClose /> : <MdMenu />}
            </button>
          </div>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer w-28 lg:w-56"
            />
          </Link>
          <div className="md:hidden">
            <BsFillBellFill className="text-mBlack" />
            <div className="hidden">
              <ModalButton content={<Alarm />} />
            </div>
          </div>
        </div>
        <div className="md:flex w-full items-center justify-between bg-mGray px-4 ml-4 h-12 rounded-lg hidden">
          <ul className="md:flex hidden uppercase items-center gap-8">
            <NavMainLinks links={navigationLinks} />
            {accessToken != null ? (
              <NavMainMenu link={"/mypage/favorites"} name={"마이페이지"} />
            ) : (
              <></>
            )}
          </ul>
          <div className="md:block hidden">
            {accessToken != null ? (
              <div className="flex items-center">
                <Profile badgeIcon={badgeIcon} />
                <span className="text-mYellow "> {nickname} 평론가님</span>

                <LogoutButton logoutHandler={logoutHandler} />
                {/* <ModalButton content={<Alarm />} /> */}
              </div>
            ) : (
              <LoginBox />
            )}
          </div>
        </div>
        <MobileNavbar
          open={open}
          myLinks={myLinks}
          accessToken={accessToken}
          logoutHandler={logoutHandler}
          nickname={nickname}
          badgeIcon={badgeIcon}
        />
      </div>
    </nav>
  );
};
export default NavBar;
