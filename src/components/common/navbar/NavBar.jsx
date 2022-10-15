import { useState } from "react";
import Logo from "images/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdClose, MdMenu } from "react-icons/md";
import LoginBox from "./LoginBox";

import { myLinks, navigationLinks } from "./MyLinks";
import LogoutButton from "./LogoutButton";
import ModalButton from "components/Modal/ModalButton";
import Alarm from "../Alarm";
import Profile from "../Profile";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

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
    <nav className="bg-mBlack fixed top-0 z-50 left-0 w-full  mx-auto justify-center md:px-40">
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
            <ModalButton content={<Alarm />} />
          </div>
        </div>
        <div className="md:flex w-full items-center justify-between bg-mGray px-4 ml-4 h-12 rounded-lg hidden">
          <ul className="md:flex hidden uppercase items-center gap-8">
            <NavLinks links={navigationLinks} />
          </ul>
          <div className="md:block hidden">
            {accessToken != null ? (
              <div className="flex items-center">
                <div className="flex items-center group">
                  <div>
                    <Profile />

                    <div className="absolute top-16 right-64 hidden group-hover:block hover:block ">
                      <div className="py-3">
                        <div className="w-4 h-4 left-10 absolute mt-1 bg-mCream rotate-45"></div>
                      </div>
                      <div className="bg-mCream p-3 list-none rounded-lg ">
                        <ul className="text-center">
                          <li className="text-sm text-mGray my-2.5 ">
                            <Link
                              className="hover:font-bold text-mBlack"
                              to="/mypage/favorites"
                            >
                              마이페이지
                            </Link>
                          </li>
                          <li className="text-sm text-mGray my-2.5 ">
                            <LogoutButton logoutHandler={logoutHandler} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <span className="text-mYellow "> {nickname} 평론가님</span>
                </div>

                <ModalButton content={<Alarm />} />
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
        />
      </div>
    </nav>
  );
};
export default NavBar;
