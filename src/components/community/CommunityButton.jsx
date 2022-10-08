import React from "react";

const CommunityButton = ({ onClickHandler, children }) => {
  return (
    <button
      className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-4 px-4 flex text-md"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default CommunityButton;
