import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailTags = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex mt-6 justify-center">
        <Link to={`/genre/drama`}>
          <button
            // onClick={() => navigate(`/genre/drama`)}
            className="bg-mWhite px-4 py-2 rounded-full items-center hover:bg-gray-400 focus:outline-none"
          >
            <span>드라마</span>
          </button>
        </Link>
        <Link to={`/genre/romance`}>
          <button
            // onClick={() => navigate(`/genre/romance`)}
            className="bg-mWhite ml-3 py-2 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
          >
            <span>로맨스</span>
          </button>
        </Link>
        <button
          onClick={() => navigate(`/genre/horror`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>공포</span>
        </button>
        <button
          onClick={() => navigate(`/genre/action`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>액션</span>
        </button>
        <button
          onClick={() => navigate(`/genre/fantasy`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>판타지</span>
        </button>
        <button
          onClick={() => navigate(`/genre/comedy`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>코미디</span>
        </button>
        <button
          onClick={() => navigate(`/genre/animation`)}
          className="bg-mWhite ml-3  px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>애니매이션</span>
        </button>
        <button
          onClick={() => navigate(`/genre/thriller`)}
          className="bg-mWhite ml-3 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none"
        >
          <span>스릴러</span>
        </button>
      </div>
    </div>
  );
};

export default DetailTags;
