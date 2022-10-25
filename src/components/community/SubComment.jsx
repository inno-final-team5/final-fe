import { useContext, useState, useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation } from "react-query";
import UserContext from "contexts/UserContext";
import { Toast } from "components/common/Toast";
import { deleteSubComment, updateSubComment } from "apis/postApi";
import CommentItemHeader from "./CommentItemHeader";

const SubComment = ({ data }) => {
  console.log(data);
  const queryClient = useQueryClient();
  const { nickname } = useContext(UserContext);
  const [updateSubCommentMode, setUpdateSubCommentMode] = useState(false);
  const updateSubCommentBody = useRef("");

  const deleteSub = (id) => {
    deleteSubCommentMutation.mutate({
      subCommentId: id,
    });
  };

  const deleteSubCommentMutation = useMutation(deleteSubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "삭제되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const updateSub = () => {
    setUpdateSubCommentMode(true);
    console.log(updateSubCommentMode);
  };

  const cancelSub = () => {
    setUpdateSubCommentMode(false);
  };

  const submitSub = (id) => {
    if (updateSubCommentBody.current.value.length < 1) {
      return Toast.fire({ icon: "warning", title: "내용이 없습니다." });
    }

    updateSubCommentMutation.mutate({
      SubCommentId: id,
      subCommentContent: updateSubCommentBody.current.value,
    });
  };

  const updateSubCommentMutation = useMutation(updateSubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      setUpdateSubCommentMode(false);
      Toast.fire({ icon: "success", title: "수정되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="mr-10">
      {!updateSubCommentMode ? (
        <div
          key={data.subCommentId}
          className="bg-mCream py-4 px-5 text-mBlack rounded-lg flex flex-col gap-2"
        >
          <CommentItemHeader
            badgeId={data.badgeId}
            nickname={data.nickname}
            createdAt={data.createdAt}
          />
          <p>{data.subCommentContent}</p>

          {nickname === data.nickname ? (
            <div className="flex flex-row justify-end gap-2">
              <button onClick={updateSub}>
                <FaEdit className="mr-1" />
              </button>
              <button
                onClick={() => {
                  deleteSub(data.subCommentId);
                }}
              >
                <FaTrash className="mr-1" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          key={data.subCommentId}
          className="bg-mCream py-4 px-5 text-mBlack rounded-lg flex flex-col gap-2"
        >
          <CommentItemHeader
            badgeId={data.badgeId}
            nickname={data.nickname}
            createdAt={data.createdAt}
          />
          <textarea
            className="bg-mCream w-full focus:outline-none p-2 resize-none"
            rows="3"
            autoFocus
            defaultValue={data.subCommentContent}
            ref={updateSubCommentBody}
            required
          ></textarea>
          {nickname === data.nickname ? (
            <div className="flex flex-row justify-end gap-2">
              <button onClick={cancelSub}>
                <AiOutlineClose className="mr-1" />
              </button>
              <button
                onClick={() => {
                  submitSub(data.subCommentId);
                }}
              >
                <AiOutlineCheck className="mr-1" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default SubComment;
