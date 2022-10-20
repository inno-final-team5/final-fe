import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/";

const DetailTags = () => {
  const navigate = useNavigate();
  return (
    <>
      <TagSpace>
        <Tags>
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
        </Tags>
      </TagSpace>
    </>
  );
};

export default DetailTags;

export const TagButton = tw.button`
bg-mWhite ml-3 py-2 px-3 md:py-2 lg:px-4 md:px-2 md:text-sm rounded-full items-center hover:bg-gray-400 focus:outline-none
`;
const TagSpace = tw.div`
invisible md:visible md:mt-4 md:mb-2 sm:mt-0
`;
const Tags = tw.div`
flex lg:mt-6 lg:mb-6 justify-center
`;
