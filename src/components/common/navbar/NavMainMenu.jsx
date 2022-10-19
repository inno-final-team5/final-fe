import React from "react";
import { NavLink } from "react-router-dom";

const NavMainMenu = ({ link, name }) => {
  const activeLink = `my-5 flex items-center gap-2 text-mYellow font-bold text-md`;
  const normalLink = `my-5 flex items-center gap-2 text-mCream text-md`;

  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      {name}
    </NavLink>
  );
};

export default NavMainMenu;
