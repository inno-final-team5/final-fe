import tw from "tailwind-styled-components";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import SubCommentForm from "./SubcommentForm";
import { useQueryClient, useMutation } from "react-query";
import { deleteComment, updateComment } from "apis/postApi";
import { Toast } from "components/common/Toast";
import { useState, useRef } from "react";
import SubCommentList from "./SubCommentList";
import CommentItemHeader from "./CommentItemHeader";

const Comment = ({ commentData }) => {
  const queryClient = useQueryClient();
  const nickname = localStorage.getItem("nickname");
  const [updateCommentMode, setUpdateCommentMode] = useState(false);

  const [activeSubComment, setActiveSubComment] = useState(false);
  const updateCommentBody = useRef("");

  const onDeleteHandler = () => {
    deleteCommentMutation.mutate({ commentId: commentData.commentId });
  };

  const deleteCommentMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "삭제되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onUpdateHandler = () => {
    setUpdateCommentMode(true);
  };

  const onCancelHandler = () => {
    setUpdateCommentMode(false);
  };

  const onSubmitHandler = () => {
    updateCommentMutation.mutate({
      commentId: commentData.commentId,
      commentContent: updateCommentBody.current.value,
    });
  };

  const updateCommentMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      setUpdateCommentMode(false);
      Toast.fire({ icon: "success", title: "수정되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      {!updateCommentMode ? (
        <>
          <CommentContainer>
            <CommentItemHeader
              badgeId={commentData.badgeId}
              nickname={commentData.nickname}
              createdAt={commentData.createdAt}
            />
            <CommentContextContainer>
              <p>{commentData.commentContent}</p>
            </CommentContextContainer>

            {commentData.nickname === nickname ? (
              <CommentButtonContainer>
                <button onClick={onUpdateHandler}>
                  <FaEdit className="mr-1" />
                </button>
                <button onClick={onDeleteHandler}>
                  <FaTrash className="mr-1" />
                </button>
              </CommentButtonContainer>
            ) : (
              <CommentButtonContainer>
                <button
                  onClick={() => {
                    setActiveSubComment(!activeSubComment);
                  }}
                >
                  <BsArrowReturnRight className="mr-1" />
                </button>
              </CommentButtonContainer>
            )}
          </CommentContainer>
          {activeSubComment ? (
            <SubCommentForm commentData={commentData} />
          ) : (
            <></>
          )}
          <SubCommentList commentData={commentData} />
        </>
      ) : (
        <>
          <CommentContainer>
            <CommentItemHeader
              badgeId={commentData.badgeId}
              nickname={commentData.nickname}
              createdAt={commentData.createdAt}
            />
            <CommentContextContainer>
              <textarea
                className="bg-mWhite w-full focus:outline-none p-2 resize-none"
                rows="3"
                autoFocus
                defaultValue={commentData.commentContent}
                ref={updateCommentBody}
              ></textarea>
            </CommentContextContainer>

            {commentData.nickname === nickname ? (
              <CommentButtonContainer>
                <button onClick={onCancelHandler}>
                  <AiOutlineClose className="mr-1" />
                </button>
                <button onClick={onSubmitHandler}>
                  <AiOutlineCheck className="mr-1" />
                </button>
              </CommentButtonContainer>
            ) : (
              <></>
            )}
          </CommentContainer>
          <SubCommentList commentData={commentData} />
        </>
      )}
    </>
  );
};

const CommentContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-4
`;

const CommentContextContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-2
`;

const CommentButtonContainer = tw.div`
flex justify-end
`;

export default Comment;
