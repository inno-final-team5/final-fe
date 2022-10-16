import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Header = () => {
  const nickname = localStorage.getItem("nickname");
  const badgeIcon = localStorage.getItem("badgeIcon");
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("nickname");
    localStorage.removeItem("badgeIcon");
    alert("로그아웃 되셨습니다 ");
    navigate("/");
  };

  return (
    <header>
      <NavBar
        logoutHandler={logoutHandler}
        nickname={nickname}
        accessToken={accessToken}
        badgeIcon={badgeIcon}
      />
    </header>
  );
};

export default Header;
