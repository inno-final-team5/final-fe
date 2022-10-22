import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "./Toast";
import LoginBox from "./navbar/LoginBox";
import NavBar from "./navbar/NavBar";
import UserBox from "./navbar/UserBox";
import LogoBox from "./LogoBox";
import { MdClose, MdMenu } from "react-icons/md";
import MobileNavbar from "./navbar/MobileNavbar";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("nickname");
    localStorage.removeItem("badgeIcon");
    Toast.fire({ icon: "success", title: "로그아웃 되었습니다." });
    navigate("/");
  };
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full md:w-4/5 z-50  mx-auto flex  justify-center bg-mBlack">
      <div className="flex w-full md:w-4/5 items-center justify-between bg-mBlack">
        <div className="text-3xl md:hidden flex items-center z-50 px-4">
          <button onClick={() => setOpen(!open)} className="text-mYellow">
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        <div className="md:basis-2/12 z-50">
          <LogoBox />
        </div>

        <div className="hidden basis-6/12 justify-start md:flex items-end content-end">
          <NavBar accessToken={accessToken} />
        </div>
        <div className="hidden basis-4/12 justify-end md:flex">
          {accessToken !== null ? (
            <UserBox logoutHandler={logoutHandler} />
          ) : (
            <LoginBox />
          )}
        </div>
        <div className="text-3xl md:hidden flex items-center z-50 px-4">
          <button disabled className="text-mBlack">
            <BsFillBellFill />
          </button>
        </div>

        <MobileNavbar open={open} accessToken={accessToken} />
      </div>
    </header>
  );
};

export default Header;
