import React from "react";

const LogoutButton = ({ logoutHandler }) => {
  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="text-mCream hover:text-mYellow"
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
