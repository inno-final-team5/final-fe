import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import { myLinks, navigationLinks } from "./MyLinks";
import ModalButton from "components/Modal/ModalButton";
import Alarm from "../Alarm";
import MobileNavbar from "./MobileNavbar";
import NavMainMenu from "./NavMainMenu";
import { BsFillBellFill } from "react-icons/bs";

const NavBar = ({ badgeIcon, nickname, accessToken, logoutHandler }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:ml-auto md:mr-auto flex items-center text-base w-full">
      <div className="flex justify-start pl-8">
        <ul className="flex gap-6">
          {navigationLinks.map((link) => (
            <div key={link.name}>
              <div className="text-left md:cursor-pointer group">
                <NavMainMenu link={link.link} name={link.name} />
              </div>
            </div>
          ))}
          {accessToken != null ? (
            <NavMainMenu link={"/mypage/favorites"} name={"마이페이지"} />
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
