import React from "react";
import NavSubMenu from "./NavSubMenu";

const NavSubLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <NavSubMenu link={link.link} name={link.name} />
          </div>
        </div>
      ))}
    </>
  );
};

export default NavSubLinks;
