import React from "react";

const DetailTags = () => {
  return (
    <div>
      <div className="flex mt-6 justify-center">
        <button className="bg-mWhite px-4 py-2 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>드라마</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>로맨스</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>공포</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>액션</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>판타지</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>코미디</span>
        </button>
        <button className="bg-mWhite ml-3  px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>애니매이션</span>
        </button>
        <button className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>스릴러</span>
        </button>
      </div>
    </div>
  );
};

export default DetailTags;
