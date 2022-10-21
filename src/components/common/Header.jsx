import React from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "./Toast";
import LoginBox from "./navbar/LoginBox";
import NavBar from "./navbar/NavBar";
import UserBox from "./navbar/UserBox";
import LogoBox from "./LogoBox";

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

  return (
    <header className="text-gray-400  body-font fixed w-full mx-auto z-50">
      <div class="container flex flex-wrap flex-col md:flex-row items-center mx-auto justify-around">
        <LogoBox />
        <div className="bg-mGray flex rounded-lg items-center my-4 justify-between w-fit">
          <NavBar accessToken={accessToken} />

          {accessToken !== null ? (
            <UserBox logoutHandler={logoutHandler} />
          ) : (
            <LoginBox />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
