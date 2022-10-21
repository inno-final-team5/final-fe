import Profile from "../Profile";
import LogoutButton from "./LogoutButton";

const UserBox = ({ logoutHandler }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-3 mt-0">
      <div className="flex items-center">
        <Profile />
        <LogoutButton logoutHandler={logoutHandler} />
        {/* <ModalButton content={<Alarm />} /> */}
      </div>
    </div>
  );
};

export default UserBox;
