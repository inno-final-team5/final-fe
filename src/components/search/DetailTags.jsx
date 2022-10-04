import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailTags = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex mt-6 justify-center">
        <button
          onClick={() => navigate(`/genre/드라마`)}
          className="bg-mWhite px-4 py-2 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>드라마</span>
        </button>

        <button
          onClick={() => navigate(`/genre/로맨스`)}
          className="bg-mWhite ml-3 py-2 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>로맨스</span>
        </button>

        <button
          onClick={() => navigate(`/genre/공포`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>공포</span>
        </button>
        <button
          onClick={() => navigate(`/genre/액션`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>액션</span>
        </button>
        <button
          onClick={() => navigate(`/genre/판타지`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>판타지</span>
        </button>
        <button
          onClick={() => navigate(`/genre/코미디`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>코미디</span>
        </button>
        <button
          onClick={() => navigate(`/genre/애니메이션`)}
          className="bg-mWhite ml-3  px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>애니메이션</span>
        </button>
        <button
          onClick={() => navigate(`/genre/스릴러`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>스릴러</span>
        </button>
        <button onClick={() => navigate(`/genre/SF`)} className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none">
          <span>SF</span>
        </button>
      </div>
    </div>
  );
};

export default DetailTags;
