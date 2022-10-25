import React from "react";
import Swal from "sweetalert2";

const InActiveBadge = ({ icon, name, description, currentCount, maxCount }) => {
  const onClickInActiveBadgeHandler = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${description}</p>
        <div class="w-full flex items-center justify-center">
          <span class="bg-mGray font-medium px-4 py-2 text-mYellow rounded-md">${currentCount}/${maxCount} 달성</span>
        </div>
      </div>
      `,
      confirmButtonText: "확인",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-yellow-500 focus:outline-none px-4 py-2 text-mGray rounded-md",
      },
    });
  };
  return (
    <div
      className="w-20 h-20 bg-mGray border-solid border-mWhite border rounded-xl py-4 flex justify-center items-center m-2 cursor-default"
      onClick={onClickInActiveBadgeHandler}
    >
      <span className="text-gray grayscale text-4xl font-serif">{icon}</span>
    </div>
  );
};

export default InActiveBadge;
