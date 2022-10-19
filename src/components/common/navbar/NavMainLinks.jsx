import React from "react";
import NavMainMenu from "./NavMainMenu";

const NavMainLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <NavMainMenu link={link.link} name={link.name} />
          </div>
        </div>
      ))}
    </>
  );
};

export default NavMainLinks;
