import React from "react";

const LogoutButton = ({ logoutHandler }) => {
  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="text-mCream hover:text-mYellow md:text-mGray md:hover:text-mBlack md:hover:font-bold"
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
