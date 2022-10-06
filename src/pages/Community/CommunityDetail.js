import React from "react";
import tw from "tailwind-styled-components";
import { FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { getPostDetail, deletePost } from "apis/postApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Profile from "components/common/Profile";
import Spinner from "components/common/Spinner";

const CommunityDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const nickname = localStorage.getItem("nickname");

  const [updatePost, setUpdatePost] = useState(false);
  const [like, setLike] = useState(false);

  // const likeMutate = useMutation()

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery(["post", id], () => getPostDetail(id));

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      navigate("/community/all");
      alert("삭제되었습니다.");
    },
    onError: () => {
      console.log(error);
    },
  });

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
          <button onClick={() => setLike(!like)}>
            {like ? (
              <FaThumbsUp className="text-mYellow" />
            ) : (
              <FaThumbsUp className="text-mCream" />
            )}
          </button>
          <DetailLikeCount> {postData.likeNum}</DetailLikeCount>
        </DetailLikeContainer>
        {postData.nickname === nickname ? (
          <DetailControlContainer>
            <button onClick={() => deletePostMutation.mutate({ id })}>
              <FaTrash />
            </button>
            <button onClick={() => setUpdatePost(!updatePost)}>
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
