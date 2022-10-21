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
    <header className="fixed w-4/5 z-50  mx-auto flex items-center justify-center bg-mBlack">
      <div className="basis-2/12">
        <LogoBox />
      </div>
      <div className="basis-7/12 justify-start flex ">
        <NavBar accessToken={accessToken} />
      </div>
      <div className="basis-3/12">
        <LoginBox />
      </div>
    </header>
  );
};

export default Header;
