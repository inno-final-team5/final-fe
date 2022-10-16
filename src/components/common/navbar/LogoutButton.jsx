import React from "react";
import { MdLogout } from "react-icons/md";

const LogoutButton = ({ logoutHandler }) => {
  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="hover:text-mYellow text-mYellow md:ml-4 md:text-lg  md:hover:font-bold"
    >
      <MdLogout />
    </button>
  );
};

export default LogoutButton;
