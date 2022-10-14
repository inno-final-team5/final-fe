import React from "react";
import NavItem from "./NavItem";

const NavLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <NavItem link={link.link} name={link.name} />
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
