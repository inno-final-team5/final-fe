import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack} className="text-mYellow">
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default BackButton;
