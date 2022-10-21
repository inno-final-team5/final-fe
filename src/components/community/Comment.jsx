import tw from "tailwind-styled-components";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import BadgeEmoji from "components/common/BadgeEmoji";
import { useQueryClient, useMutation } from "react-query";
import { deleteComment, updateComment } from "apis/postApi";
import { Toast } from "components/common/Toast";
import { useState, useRef } from "react";

const Comment = ({ commentData }) => {
  const queryClient = useQueryClient();
  const nickname = localStorage.getItem("nickname");
  const [updateCommentMode, setUpdateCommentMode] = useState(false);
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
  console.log(commentData.commentId);

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
            <div className="flex-auto">
              <NicknameContainer>
                <BadgeEmoji className="mr-2" badgeId={commentData.badgeId} />
                <p className="mr-2">{commentData.nickname}</p>
                <p>
                  {new Date(commentData.createdAt).toLocaleDateString("ko-KR")}
                </p>
              </NicknameContainer>
            </div>
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
                <button>
                  <BsArrowReturnRight className="mr-1" />
                </button>
              </CommentButtonContainer>
            )}
          </CommentContainer>
        </>
      ) : (
        <>
          <CommentContainer>
            <div className="flex-auto">
              <NicknameContainer>
                <BadgeEmoji className="mr-2" badgeId={commentData.badgeId} />
                <p className="mr-2">{commentData.nickname}</p>
                <p>
                  {new Date(commentData.createdAt).toLocaleDateString("ko-KR")}
                </p>
              </NicknameContainer>
            </div>
            <CommentContextContainer>
              <textarea
                className="bg-mWhite w-full focus:outline-none p-2"
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
              <CommentButtonContainer>
                <button>
                  <BsArrowReturnRight className="mr-1" />
                </button>
              </CommentButtonContainer>
            )}
          </CommentContainer>
        </>
      )}
    </>
  );
};

const CommentContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-4
`;

const NicknameContainer = tw.div`
flex text-s text-mBlack w-fit h-full mb-2
`;

const CommentContextContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-2
`;

const CommentButtonContainer = tw.div`
flex justify-end
`;

export default Comment;
