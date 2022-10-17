import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, name }) => {
  const activeLink = `my-5 flex items-center gap-2 text-mYellow font-bold`;
  const normalLink = `my-5 flex items-center gap-2 text-mCream`;

  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
      {name}
    </NavLink>
  );
};

export default NavItem;
