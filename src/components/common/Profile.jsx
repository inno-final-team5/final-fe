import UserContext from "contexts/UserContext";
import React from "react";
import { useContext } from "react";

const Profile = () => {
  const { nickname, mainBadge } = useContext(UserContext);
  return (
    <>
      <span className="text-xl m-1">{mainBadge}</span>
      <span className="text-mYellow "> {nickname} 평론가님</span>
    </>
  );
};

export default Profile;
