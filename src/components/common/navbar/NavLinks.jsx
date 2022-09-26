import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ links }) => {
  const activeLink = `my-8 flex items-center gap-2 text-mYellow font-bold`;
  const normalLink = `my-8 flex items-center gap-2 text-mCream`;

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {link.name}
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
