import tw from "tailwind-styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { getPostDetail, deletePost, updatePost } from "apis/postApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Profile from "components/common/Profile";
import Spinner from "components/common/Spinner";
import CommunityButton from "components/community/CommunityButton";
import { Toast } from "components/common/Toast";
import PostAuthor from "components/community/PostAuthor";
import LikeButton from "components/community/LikeButton";
import Comments from "components/community/Comments";
import BackButton from "components/common/BackButton";

const CommunityDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateTitle = useRef("");
  const updateReview = useRef("");

  const nickname = localStorage.getItem("nickname");

  const [updatePostMode, setUpdatePostMode] = useState(false);

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery(["post", id], () => getPostDetail(id));

  const onDeleteHandler = () => {
    deletePostMutation.mutate({ id });
  };

  const onUpdateHandler = () => {
    setUpdatePostMode(true);
  };

  const onCancelHandler = () => {
    setUpdatePostMode(false);
  };

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "삭제되었습니다." });
      navigate("/community/all");
    },
    onError: () => {
      console.log(error);
    },
  });

  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      setUpdatePostMode(false);
      Toast.fire({ icon: "success", title: "수정되었습니다." });
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

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  let postData = post.data;
  let commentData = post.data.commentResponseDtoList;

  return (
    <div>
      {!updatePostMode ? (
        <>
          <DetailContainer>
            <DetailContentContainer>
              <div className="flex justify-between">
                <BackButton />
                <PostAuthor
                  nickname={postData.nickname}
                  badgeId={postData.badgeId}
                />
              </div>

              <DetailTitle>{postData.postTitle}</DetailTitle>
              <DetailContent>
                <p>{postData.postContent}</p>
              </DetailContent>

              <DetailLikeContainer>
                <LikeButton />
                <DetailLikeCount> {postData.likeNum}</DetailLikeCount>
              </DetailLikeContainer>

              {postData.nickname === nickname ? (
                <DetailControlContainer>
                  <CommunityButton
                    type="button"
                    onClickHandler={onDeleteHandler}
                  >
                    <FaTrash className="mr-1" />
                    삭제
                  </CommunityButton>
                  <CommunityButton
                    type="button"
                    onClickHandler={onUpdateHandler}
                  >
                    <FaEdit className="mr-1" />
                    수정
                  </CommunityButton>
                </DetailControlContainer>
              ) : (
                <></>
              )}
            </DetailContentContainer>
          </DetailContainer>
          <Comments commentData={commentData} />
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
                <textarea
                  className="bg-mWhite w-full focus:outline-none resize-none"
                  rows="10"
                  defaultValue={postData.postContent}
                  autoFocus
                  ref={updateReview}
                />
              </DetailContent>
              {postData.nickname === nickname ? (
                <DetailControlContainer>
                  <CommunityButton
                    type="button"
                    onClickHandler={onCancelHandler}
                  >
                    <AiOutlineClose className="mr-1" />
                    취소
                  </CommunityButton>
                  <CommunityButton
                    type="button"
                    onClickHandler={onSubmitHandler}
                  >
                    <AiOutlineCheck className="mr-1" />
                    등록
                  </CommunityButton>
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
flex justify-end gap-2 text-mBlack
`;

export default CommunityDetail;
