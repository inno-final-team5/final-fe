import UserContext from "contexts/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { nickname, mainBadge } = useContext(UserContext);
  return (
    <>
      <span className="text-2xl m-1">{mainBadge}</span>
      <span className="text-mYellow text-sm xl:text-lg">
        {nickname} 평론가님
      </span>
    </>
  );
};

export default Profile;
