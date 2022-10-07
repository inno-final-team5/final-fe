import React from "react";
import tw from "tailwind-styled-components";
import { FaThumbsUp, FaRegThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { getPostDetail, deletePost, updatePost } from "apis/postApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Profile from "components/common/Profile";
import Spinner from "components/common/Spinner";
import { api } from "shared/api";
import Swal from "sweetalert2";

const CommunityDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const updateTitle = useRef("");
  const updateReview = useRef("");

  const nickname = localStorage.getItem("nickname");

  const [updatePostMode, setUpdatePostMode] = useState(false);
  const [like, setLike] = useState(false);

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

  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      setUpdatePostMode(false);
      alert("수정되었습니다");
    },
    onError: () => {
      console.log(error);
    },
  });

  const onSubmitHandler = () => {
    updatePostMutation.mutate({
      id,
      postTitle: updateTitle.current.value,
      postContent: updateReview.current.value,
      postCategory: postData.postCategory,
    });
  };

  const addReviewlike = async (data) => {
    return await api.post(`/auth/post/like/${id}`, data, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
  };
  const { mutate } = useMutation(addReviewlike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteReviewlike = async (data) => {
    return await api.delete(`/auth/post/like/${id}`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
  };
  const deleteLike = useMutation(deleteReviewlike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  }).mutate;

  const checkLogin = () => {
    if (localStorage.getItem("accessToken") === null) {
      Swal.fire("로그인이 필요합니다!");
    } else {
      mutate();
      setLike(true);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  let postData = post.data;

  return (
    <div>
      {!updatePostMode ? (
        <>
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

              {like ? (
                <DetailLikeContainer>
                  <button
                    onClick={() => {
                      deleteLike();
                      setLike(false);
                    }}
                  >
                    <FaThumbsUp className="text-mYellow hover:text-mCream" />
                  </button>
                  <DetailLikeCount> {postData.likeNum}</DetailLikeCount>
                </DetailLikeContainer>
              ) : (
                <DetailLikeContainer>
                  <button
                    onClick={() => {
                      checkLogin();
                    }}
                  >
                    <FaRegThumbsUp className="text-mYellow hover:text-mCream" />
                  </button>
                  <DetailLikeCount> {postData.likeNum}</DetailLikeCount>
                </DetailLikeContainer>
              )}

              {postData.nickname === nickname ? (
                <DetailControlContainer>
                  <button
                    className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-2 px-4 flex text-md text-mBlack"
                    onClick={() => deletePostMutation.mutate({ id })}
                  >
                    <FaTrash className="mr-1" />
                    삭제
                  </button>
                  <button
                    className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-2 px-4 flex text-md text-mBlack"
                    onClick={() => setUpdatePostMode(true)}
                  >
                    <FaEdit className="mr-1" />
                    수정
                  </button>
                </DetailControlContainer>
              ) : (
                <></>
              )}
            </DetailContentContainer>
          </DetailContainer>
        </>
      ) : (
        <>
          <DetailContainer>
            <DetailContentContainer>
              <DetailProfileContainer>
                <Profile />
                <p> {postData.nickname}</p>
              </DetailProfileContainer>
              <DetailTitle>
                <input
                  className="bg-mWhite w-full h-full focus:outline-none"
                  defaultValue={postData.postTitle}
                  ref={updateTitle}
                />
              </DetailTitle>
              <DetailContent>
                <input
                  className="bg-mWhite w-full h-full focus:outline-none"
                  defaultValue={postData.postContent}
                  autoFocus
                  ref={updateReview}
                />
              </DetailContent>
              {postData.nickname === nickname ? (
                <DetailControlContainer>
                  <button
                    className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-2 px-4 flex text-md text-mBlack"
                    onClick={() => setUpdatePostMode(false)}
                  >
                    <AiOutlineClose className="mr-1" />
                    취소
                  </button>
                  <button
                    className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-2 px-4 flex text-md text-mBlack"
                    onClick={onSubmitHandler}
                  >
                    <AiOutlineCheck className="mr-1" />
                    등록
                  </button>
                </DetailControlContainer>
              ) : (
                <></>
              )}
            </DetailContentContainer>
          </DetailContainer>
        </>
      )}
    </div>
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
flex justify-end gap-2 text-mWhite
`;

export default CommunityDetail;
