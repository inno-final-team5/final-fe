import React from "react";

const InActiveBadge = ({ icon }) => {
  return (
    <div className="w-20 h-20 bg-mGray border-solid border-mWhite border rounded-xl py-4 flex justify-center items-center m-2 cursor-default">
      <span className="text-gray grayscale text-4xl font-serif">{icon}</span>
    </div>
  );
};

export default InActiveBadge;
