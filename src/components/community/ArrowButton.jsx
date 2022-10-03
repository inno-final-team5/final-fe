import React from "react";

const ArrowButton = ({ icon, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="p-1 text-mCream disabled:text-mGray text-sm md:text-lg"
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
