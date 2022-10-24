import Profile from "../Profile";
import LogoutButton from "./LogoutButton";
import ModalButton from "components/Modal/ModalButton";
import Notification from "../notification/Notification";

const UserBox = ({ logoutHandler }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-3 mt-0">
      <div className="flex items-center">
        <Profile />
        <ModalButton content={<Notification />} />
        <LogoutButton logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default UserBox;
