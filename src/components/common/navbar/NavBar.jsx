import { useState } from "react";
import Logo from "images/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdClose, MdMenu } from "react-icons/md";
import LoginBox from "./LoginBox";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { myLinks, navigationLinks } from "./MyLinks";
import LogoutButton from "./LogoutButton";
import ModalButton from "components/Modal/ModalButton";
import Alarm from "../Alarm";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const accessToken = localStorage.getItem("accessToken"); //todo
  const nickname = localStorage.getItem("nickname");
  const profileImage = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; //badgeImage로 대체

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("nickname");
    alert("로그아웃 되셨습니다 ");
    navigate("/");
  };

  return (
    <nav className="bg-mBlack sticky top-0 z-50">
      <div className="flex items-center justify-around ">
        <div className="z-50 md:w-auto w-full flex justify-between p-5 md:px-2 md:py-0 items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer w-28 lg:w-56"
            />
          </Link>

          <div className="text-3xl md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-mYellow">
              {open ? <MdClose /> : <MdMenu />}
            </button>

            <ModalButton content={<Alarm />} />
          </div>
        </div>
        <div className="md:flex w-full items-center justify-between bg-mGray px-4 ml-4 h-12 rounded-lg hidden">
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
            <NavLinks links={navigationLinks} />
          </ul>
          <div className="md:block hidden">
            {accessToken != null ? (
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="group">
                    <img
                      src={profileImage}
                      alt="프로필"
                      className="w-8 h-8 mx-2 md:cursor-pointer"
                    />

                    <div className="absolute top-16 hidden group-hover:block hover:block ">
                      <div className="py-3">
                        <div className="w-4 h-4 left-3 absolute mt-1 bg-mGray rotate-45"></div>
                      </div>
                      <div className="bg-mGray p-3 list-none ">
                        <ul className="text-center">
                          <li className="text-sm text-mCream my-2.5 ">
                            <Link
                              className="hover:text-mYellow"
                              to="/mypage/favorites"
                            >
                              마이페이지
                            </Link>
                          </li>
                          <li className="text-sm text-mCream my-2.5 ">
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
        <ul
          className={`
          md:hidden bg-mBlack absolute w-full h-screen bottom-0 py-24 pl-4 top-0 
          duration-500 ${open ? "left-0" : "left-[-120%]"} `}
        >
          <div>
            {accessToken != null ? (
              <div>
                <div className="w-full flex items-center justify-between pr-8 ">
                  <div className="flex items-center">
                    <img
                      src={profileImage}
                      alt="프로필"
                      className="w-8 h-8 mx-2 md:cursor-pointer"
                    />
                    <span className="text-mYellow "> {nickname} 평론가님</span>
                  </div>
                  <LogoutButton logoutHandler={logoutHandler} />
                </div>
                <div className="text-mCream"></div>
              </div>
            ) : (
              <LoginBox />
            )}
          </div>
          <div>
            <NavLinks links={navigationLinks} />
            {accessToken != null ? (
              <div className="text-mCream">
                <h1
                  className="pl-3 flex justify-between hover:cursor-pointer"
                  onClick={() => {}}
                >
                  마이페이지
                  <span>
                    {/* <FaChevronDown /> */}
                    <FaChevronUp />
                  </span>
                </h1>
                <div className="pl-8 md:hidden">
                  <NavLinks links={myLinks} />
                </div>
              </div>
            ) : null}
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
