import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/";

const DetailTags = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex mt-6 justify-center">
        <TagButton onClick={() => navigate(`/genre/드라마`)}>
          <span>드라마</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/로맨스`)}>
          <span>로맨스</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/공포`)}>
          <span>공포</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/액션`)}>
          <span>액션</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/판타지`)}>
          <span>판타지</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/코미디`)}>
          <span>코미디</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/애니메이션`)}>
          <span>애니메이션</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/스릴러`)}>
          <span>스릴러</span>
        </TagButton>
        <TagButton onClick={() => navigate(`/genre/SF`)}>
          <span>SF</span>
        </TagButton>
      </div>
    </div>
  );
};

const TagButton = tw.button`
bg-mWhite ml-3 py-2 px-4 rounded-full items-center hover:bg-gray-400 focus:outline-none
`;
export default DetailTags;
