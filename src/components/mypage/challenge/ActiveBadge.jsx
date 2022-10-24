import React from "react";

const ActiveBadge = ({ icon, onClickActiveBadgeHandler }) => {
  return (
    <div
      className="w-20 h-20 bg-mWhite rounded-xl py-4 flex justify-center items-center m-2 cursor-pointer"
      onClick={onClickActiveBadgeHandler}
    >
      <span className="text-4xl font-serif">{icon}</span>
    </div>
  );
};

export default ActiveBadge;
