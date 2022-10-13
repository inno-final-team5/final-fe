import React from "react";

const Profile = () => {
  let badge = localStorage.getItem("badgeIcon");
  return <span className="text-xl m-1">{badge}</span>;
};

export default Profile;
