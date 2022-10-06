import React from "react";
import tw from "tailwind-styled-components";
import { FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "react-query";
import { getPostDetail } from "apis/postApi";
import { useParams } from "react-router-dom";
import Profile from "components/common/Profile";
import Spinner from "components/common/Spinner";

const CommunityDetail = () => {
  const { id } = useParams();

  const nickname = localStorage.getItem("nickname");

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery(["post", id], () => getPostDetail(id));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  let postData = post.data;

  return (
    <DetailContainer>
      <DetailContentContainer>
        <DetailProfileContainer>
          <Profile />
          <p> {postData.nickname}</p>
        </DetailProfileContainer>
        <DetailTitle>{postData.postTitle}</DetailTitle>
        <DetailContent>
          <p>{postData.postContent}</p>
        </DetailContent>

        <DetailLikeContainer>
          <button>
            <FaThumbsUp />
          </button>
          <DetailLikeCount> {postData.likeNum}</DetailLikeCount>
        </DetailLikeContainer>
        {postData.nickname === nickname ? (
          <DetailControlContainer>
            <button>
              <FaTrash />
            </button>
            <button>
              <FaEdit />
            </button>
          </DetailControlContainer>
        ) : (
          <></>
        )}
      </DetailContentContainer>
    </DetailContainer>
  );
};

const DetailContainer = tw.div`
bg-mGray p-4 text-mBlack rounded-lg
`;

const DetailContentContainer = tw.div`
px-4 py-2 flex gap-4 flex-col h-full 
`;

const DetailProfileContainer = tw.div`
flex items-center justify-end p-2 text-xs text-mWhite
`;

const DetailTitle = tw.h2`
text-2xl truncate w-full border-b-2 border-solid text-mBlack border-mGray  bg-mWhite rounded-xl p-4
`;

const DetailContent = tw.div`
p-7 min-h-[300px] bg-mWhite rounded-xl
`;

const DetailLikeContainer = tw.div`
 flex gap-3 justify-center items-center text-mCream  text-2xl mt-4
`;

const DetailLikeCount = tw.p`
text-mYellow
`;

const DetailControlContainer = tw.div`
flex justify-end gap-4 text-mWhite
`;

export default CommunityDetail;
