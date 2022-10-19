import MainBadgeContext from "contexts/MainBadgeContext";
import React from "react";
import { useContext } from "react";

const Profile = () => {
  const { mainBadge } = useContext(MainBadgeContext);
  return <span className="text-xl m-1">{mainBadge}</span>;
};

export default Profile;
