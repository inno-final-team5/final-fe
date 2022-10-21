import { useState } from "react";
import NavMainLinks from "./NavMainLinks";
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
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around">
      <div className="flex items-center justify-around">
        <div className="z-50 md:w-auto flex justify-between p-5 md:px-2 md:py-0 items-center">
          <div className="text-3xl md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-mYellow">
              {open ? <MdClose /> : <MdMenu />}
            </button>
          </div>

          <div className="md:hidden">
            <BsFillBellFill className="text-mBlack" />
            <div className="hidden">
              <ModalButton content={<Alarm />} />
            </div>
          </div>
        </div>
        <div className="md:flex w-full items-center justify-between bg-mGray px-4 ml-4 h-12 rounded-lg hidden">
          <ul className="md:flex hidden uppercase items-center gap-8">
            <NavMainLinks links={navigationLinks} />
            {accessToken != null ? (
              <NavMainMenu link={"/mypage/favorites"} name={"마이페이지"} />
            ) : (
              <></>
            )}
          </ul>
        </div>
        <MobileNavbar
          open={open}
          myLinks={myLinks}
          accessToken={accessToken}
          logoutHandler={logoutHandler}
          nickname={nickname}
          badgeIcon={badgeIcon}
        />
      </div>
    </nav>
  );
};
export default NavBar;
