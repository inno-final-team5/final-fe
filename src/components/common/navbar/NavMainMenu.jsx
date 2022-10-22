import React from "react";
import { NavLink } from "react-router-dom";

const NavMainMenu = ({ link, name }) => {
  const activeLink = ` flex items-center text-mYellow text-lg md:border-solid md:border-b-2 md:border-mYellow py-4 md:py-0`;
  const normalLink = ` flex items-center py-4 md:py-0 text-mCream text-lg`;

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
