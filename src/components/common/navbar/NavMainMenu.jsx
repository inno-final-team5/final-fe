import React from "react";
import { NavLink } from "react-router-dom";

const NavMainMenu = ({ link, name }) => {
  const activeLink = ` flex items-center text-mYellow text-sm xl:text-lg py-4 lg:py-0`;
  const normalLink = ` flex items-center py-4 text-sm text-mCream xl:text-lg lg:py-0`;

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
